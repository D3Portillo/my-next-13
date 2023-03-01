declare namespace NodeJS {
  export interface ProcessEnv {
    /**
     * The domain name of the deployment URL.
     * @see https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
     * */
    VERCEL_URL?: string
    // TODO: remove with your actual ENV vars
    NEXT_PUBLIC_ENV_VAR: string
  }
}
