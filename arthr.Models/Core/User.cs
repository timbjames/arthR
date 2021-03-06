﻿namespace arthr.Models.Core
{
    #region Usings

    using System;

    #endregion

    public class User : Person
    {
        #region Properties

        public DateTime Created { get; set; }
        public bool? Deleted { get; set; }
        public DateTime LastLogin { get; set; }
        public string Password { get; set; }
        public bool? RequiresPasswordReset { get; set; }
        public string Salt { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        #endregion
    }
}
