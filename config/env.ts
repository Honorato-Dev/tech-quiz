class Env {
    static SMPTP_HOST: string = process.env.SMPTP_HOST!;
    static SMPTP_PORT: string = process.env.SMPTP_PORT!;
    static SMPTP_USER: string = process.env.SMPTP_USER!;
    static SMPTP_PASSWORD: string = process.env.SMPTP_PASSWORD!;
    static SMPTP_SECURE: string = process.env.SMPTP_SECURE!;
}

export default Env