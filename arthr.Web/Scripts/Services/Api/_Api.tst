${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;
    using Typewriter.Extensions.WebApi;

    // Uncomment the constructor to change template settings.
    Template(Settings settings)
    {
        settings.IncludeProject("arthr.Api");
        settings.OutputFilenameFactory = file => {
            return file.Name.Replace("Controller", "Api").Replace(".cs", ".ts");
        };
    }

    static List<string> knownTypes = new List<string>(new  string[] { "string", "boolean", "number", "Date" });

    string ClassName(Class c){
        return c.name.Replace("Controller", "Api");
    }

    string Export(Class c){

        string apiName = c.Name.Replace("Controller", "Api");
        string camelCaseApiName = c.name.Replace("Controller", "Api");

        return "export { " + camelCaseApiName + " as " + apiName + " }";
    }

    string SimpleParameters(Parameter parameter){

        string result = "";
        
        if (knownTypes.Any(k => k.ToString().ToLower() == parameter.Type.Name.ToLower())){
            result += parameter.Name + ": " + parameter.Type;
        }

        return result;
    }

    string SeparatingComma(Method m){
        return ",";
    }

}$Classes(:BaseController)[const $ClassName = {$Methods[
    $name: ($Parameters[$SimpleParameters][, ]) => {
        return `$Url`
    }][, ]
}

$Export]
