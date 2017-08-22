namespace arthr.Utils.Attributes
{
    #region Usings

    using System;

    #endregion

    public class ReturnTypeAttribute : Attribute
    {
        #region Fields

        // ReSharper disable once NotAccessedField.Local
        private readonly Type _t;

        #endregion

        #region Constructors

        public ReturnTypeAttribute(Type t)
        {
            _t = t;
        }

        #endregion
    }
}
