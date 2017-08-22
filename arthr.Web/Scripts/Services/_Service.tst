${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;
    using Typewriter.Extensions.WebApi;

    // Uncomment the constructor to change template settings.
    Template(Settings settings)
    {
        settings.IncludeProject("arthr.Api");
        settings.OutputFilenameFactory = file => {
            return file.Name.Replace("Controller", "Service").Replace(".cs", ".ts");
        };
    }

    string SeparatingComma(Method m){
        return ",";
    }

    static List<string> debugInfo = new List<string>();
    static List<string> unknownTypes = new List<string>();
    static List<string> knownTypes = new List<string>(new  string[] { "string", "boolean", "number", "Date" });

    string PrintDebugInfo(File f){

        return string.Join(", ", debugInfo.ToArray()) + " " + "Unknown Types: " + string.Join(", ", unknownTypes.ToArray());
    }

    string Imports(Class c){

        unknownTypes = new List<string>();

        foreach (var m in c.Methods){

            foreach (var p in m.Parameters){

                var t = p.Type.Name.Replace("[]", "");

                if (!unknownTypes.Any(x => x.ToString().ToLower() == t.ToString().ToLower())){
                    unknownTypes.Add(t);
                }
            }

            foreach (var a in m.Attributes){

                if (m.Type.Name == "IActionResult"){

                    if (a.name == "returnType"){

                        string type = string.Empty;
                        string[] ar;

                        ar = a.Value.Replace("<", "").Replace(">", "").Replace("typeof(", "").Replace(")", "").Split('.');
                        type = ar[ar.Length - 1];

                        if (type == "bool"){
                            type = "boolean";
                        }

                        if (!unknownTypes.Any(x => x.ToString().ToLower() == type.ToString().ToLower())){
                            unknownTypes.Add(type);
                        }
                    }
                }
            }
        }

        for (var i = unknownTypes.Count() - 1; i >= 0; i--) {

            foreach (var kt in knownTypes){

                if (kt == unknownTypes[i]){
                    unknownTypes.RemoveAt(i);
                    break;
                }
            }
        }

        List<string> imports = new List<string>();

        imports.Add("import { IApiCallWithPayload } from '../Utility';");

        if (unknownTypes.Any()){
            foreach (var t in unknownTypes){
                imports.Add("import { " + t + " } from '../Models/" + t + "';");
            }
        }

        if (imports.Any()){
            return string.Join(Environment.NewLine, imports.ToArray()) + Environment.NewLine;
        } else {
            return null;
        }
    }

    string ReturnType(Method m) {

        if (m.Type.Name == "IActionResult"){

            //if (m.Parameters.Count() > 0){

                foreach (var a in m.Attributes){

                    debugInfo.Add(a.Value);

                    if (a.name == "returnType"){

                        string type = string.Empty;
                        string[] ar;

                        if (a.Value.Contains("<")){
                            
                            ar = a.Value.Replace("<", "").Replace(">", "").Replace("typeof(", "").Split('.');
                            type = ar[ar.Length - 1].Replace(")", "") + "[]";
                        }
                        else
                        {
                            ar = a.Value.Replace("typeof(", "").Split('.');
                            type = ar[ar.Length - 1].Replace(")", "");
                        }

                        if (type == "bool"){
                            type = "boolean";
                        }

                        return type;
                    }
                }

                return "void";
                //return m.Type.Name;
            //}
            //else {
                //return "void";
            //}
        }

        return m.Type.Name;
    }

    string ServiceName(Class c) => c.name.Replace("Controller", "Service");

    string RequestType(Method m){

        if (m.Parameters.Count() > 0){
            return m.Parameters[0].Type;
        }
        else {
            return "void";
        }
    }

    string SimpleParameters(Parameter parameter){

        string result = "";

        if (knownTypes.Any(k => k.ToString().ToLower() == parameter.Type.Name.ToLower())){
            result += parameter.Name + ": " + parameter.Type;
        }

        return result;
    }

    string Export(Class c){

        string lowerCase = c.name.Replace("Controller", "Service");
        string upperCase = c.Name.Replace("Controller", "Service");

        return "export { " + lowerCase + " as " + upperCase + " }";
    }

}$Classes(:BaseController)[$Imports
const $ServiceName = {$Methods[
    $name: ($Parameters[$SimpleParameters][, ]): IApiCallWithPayload<$RequestType, $ReturnType> => {

        return {
            method: '$HttpMethod',
            url: `http://localhost:5002$Url`
        };
    }][, ]
}

$Export]
/*
    Debug Info:
    $PrintDebugInfo
*/
