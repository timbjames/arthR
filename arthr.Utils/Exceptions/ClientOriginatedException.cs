using arthr.Utils.Attributes;
using arthr.Utils.Exceptions.Enums;
using arthr.Utils.Exceptions.Interfaces;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;

namespace arthr.Utils.Exceptions
{
    public class ClientOriginatedException<T> : GenericException<T>, IHttpExceptionResponse
        where T : struct
    {
        #region Fields

        private readonly IDictionary<string, IEnumerable<string>> _modelStateErrors;

        #endregion

        #region Constructors

        protected ClientOriginatedException(ErrorCode errorCode, Exception inner, T reason, ClientOriginatedExceptionPayload exceptionPayload = null)
            : base(errorCode, inner, reason, exceptionPayload)
        {
            _modelStateErrors = new Dictionary<string, IEnumerable<string>>();

            if (exceptionPayload?.ValidationErrors != null)
            {
                _modelStateErrors = ConvertValidationErrors(exceptionPayload.ValidationErrors);
            }
        }

        #endregion

        #region Interface Implementations

        /// <summary>
        /// Gets the type of the exception response.
        /// </summary>
        /// <returns></returns>
        public ExceptionResponseType GetExceptionResponseType() => ExceptionResponseTypeAttribute.GetExceptionResponseType<T>(Reason as Enum);

        public override IExceptionReport ToReport()
        {
            IDictionary<string, IEnumerable<string>> modelStateErrorsReport = _modelStateErrors.Count == 0 ? null : _modelStateErrors;
            return new ExceptionReport<T>(this, modelStateErrorsReport);
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Adds the model state error from exception.
        /// </summary>
        /// <param name="kvp">The KVP.</param>
        public void AddModelStateErrorFromException(KeyValuePair<string, IEnumerable<string>> kvp)
        {
            if (_modelStateErrors.ContainsKey(kvp.Key))
            {
                _modelStateErrors.Remove(kvp.Key);
            }

            _modelStateErrors.Add(kvp.Key, kvp.Value);
        }

        #endregion

        #region Private Methods

        /// <summary>
        /// Converts the validation errors into a dictionary.
        /// </summary>
        /// <param name="validationErrors">The validation errors.</param>
        /// <returns></returns>
        private IDictionary<string, IEnumerable<string>> ConvertValidationErrors(NameValueCollection validationErrors)
        {
            return validationErrors.Cast<string>()
                .Select(s => new { Key = s, Value = validationErrors.GetValues(s).AsEnumerable() })
                .ToDictionary(p => p.Key, p => p.Value);
        }

        #endregion
    }
}
