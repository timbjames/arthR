namespace arthr.Utils.Exceptions
{
    #region Usings

    using System;
    using Enums;

    #endregion

    public enum EnumUtilityCodeExceptionReason
    {
        MissingAttributesInEnum,
        EnumValueMissingAttribute
    }

    public sealed class EnumUtilityCodeException : ServerOriginatedException<EnumUtilityCodeExceptionReason>
    {
        #region Constructors

        private EnumUtilityCodeException(Exception innerException, EnumUtilityCodeExceptionReason exceptionReason, ExceptionPayload exceptionPayload)
            : base(DefaultErrorCode, innerException, exceptionReason, exceptionPayload)
        {
        }

        #endregion

        #region Properties

        private static ErrorCode DefaultErrorCode => ErrorCode.UtilityCode;

        #endregion

        #region Public Methods

        public static EnumUtilityCodeException EnumValueMissingAttribute<T>(Enum value, Exception innerException = null)
        {
            string attributeName = typeof(T).Name;

            return new EnumUtilityCodeException(
                innerException,
                EnumUtilityCodeExceptionReason.EnumValueMissingAttribute,
                ExceptionPayload.WithData(new { AttributeName = attributeName, Entry = value.ToString(), Value = value }));
        }

        public static EnumUtilityCodeException MissingAttributesInEnum<T>(EnumUtilityCodeException sourceException, Exception innerException = null)
        {
            string enumName = typeof(T).Name;

            var data = new
            {
                EnumName = enumName,
                AttributeName = sourceException.Data["AttributeName"],
                EnumEntry = sourceException.Data["Entry"],
                EnumValue = sourceException.Data["Value"]
            };

            return new EnumUtilityCodeException(
                innerException,
                EnumUtilityCodeExceptionReason.MissingAttributesInEnum,
                ExceptionPayload.WithData(data));
        }

        #endregion
    }
}
