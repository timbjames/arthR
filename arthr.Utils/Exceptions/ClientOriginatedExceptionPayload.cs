using System.Collections.Specialized;

namespace arthr.Utils.Exceptions
{
    public class ClientOriginatedExceptionPayload : ExceptionPayload
    {
        #region Properties

        public NameValueCollection ValidationErrors { get; private set; }

        #endregion

        #region Public Methods

        public static new ClientOriginatedExceptionPayload WithData(object data)
        {
            return new ClientOriginatedExceptionPayload { Data = data };
        }

        public static ClientOriginatedExceptionPayload WithValidationErrors(NameValueCollection validationErrors)
        {
            return new ClientOriginatedExceptionPayload { ValidationErrors = validationErrors };
        }

        #endregion
    }
}
