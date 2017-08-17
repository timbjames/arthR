namespace arthr.IdentityServer.Quickstart.Account
{
    public sealed class ResetPasswordModel
    {
        #region Properties

        public string ConfirmPassword { get; set; }
        public string Password { get; set; }
        public string ReturnUrl { get; set; }
        public string Username { get; set; }

        #endregion
    }
}
