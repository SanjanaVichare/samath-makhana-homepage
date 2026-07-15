import { Request, Response } from "express";
import { shopify } from "../shopify/shopify";

export const login = async (req: Request, res: Response) => {
  console.log("🔥 Login endpoint hit");
  console.log(req.body);

  try {
    const { email, password } = req.body;

    const mutation = `
      mutation customerAccessTokenCreate(
        $input: CustomerAccessTokenCreateInput!
      ) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            message
          }
        }
      }
    `;

    const response = await shopify.post("", {
      query: mutation,
      variables: {
        input: {
          email,
          password,
        },
      },
    });

    console.log(response.data);

    res.json(response.data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Login failed",
    });
  }
};


export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const createCustomerMutation = `
      mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            id
            firstName
            lastName
            email
          }
          customerUserErrors {
            field
            message
          }
        }
      }
    `;

    const createResponse = await shopify.post("", {
      query: createCustomerMutation,
      variables: {
        input: {
          firstName,
          lastName,
          email,
          password,
        },
      },
    });

    const createData = createResponse.data.data.customerCreate;

    // If Shopify returns validation errors
    if (createData.customerUserErrors.length > 0) {
      return res.status(400).json({
        errors: createData.customerUserErrors,
      });
    }

    // Automatically log the customer in
    const loginMutation = `
      mutation customerAccessTokenCreate(
        $input: CustomerAccessTokenCreateInput!
      ) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            message
          }
        }
      }
    `;

    const loginResponse = await shopify.post("", {
      query: loginMutation,
      variables: {
        input: {
          email,
          password,
        },
      },
    });

    res.json({
      success: true,
      customer: createData.customer,
      login: loginResponse.data.data.customerAccessTokenCreate,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};