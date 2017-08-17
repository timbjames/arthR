namespace arthr.Utils.Exceptions
{
    public class ExceptionPayload
    {
        #region Properties

        public object Data { get; protected set; }

        #endregion

        #region Public Methods

        public static ExceptionPayload WithData(object data)
        {
            return new ExceptionPayload { Data = data };
        }

        #endregion
    }
}
