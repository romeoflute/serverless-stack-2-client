const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-13qsl40ufitxa"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://n6e4rtkqt1.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_n8m5gbod3",
    APP_CLIENT_ID: "5shs4jac9o3h3pcen06nec29vt",
    IDENTITY_POOL_ID: "us-east-1:42b27193-cb88-47d3-bf8c-99cce8074cf5"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-fnyd36dtgrri"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://227evqxdwb.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_5XGAofaQe",
    APP_CLIENT_ID: "42q9i0b5pm7q18c3lnbnpjc1ig",
    IDENTITY_POOL_ID: "us-east-1:7372c234-feb1-47fc-ae06-57739b68aab2"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};