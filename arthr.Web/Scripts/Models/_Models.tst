${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;

    // Uncomment the constructor to change template settings.
    Template(Settings settings)
    {
        settings.IncludeProject("arthr.Models");
        settings.OutputExtension = ".ts";
    }

    static List<string> unknownTypes = new List<string>();
    static List<string> knownTypes = new List<string>(new  string[] { "string", "boolean", "number", "Date" });

    string PrintDebugInfo(File f){

        return "Unknown Types: " + string.Join(", ", unknownTypes.ToArray());
    }

    string TestClass(Class c){

        unknownTypes = new List<string>();

        foreach (var p in c.Properties){
            unknownTypes.Add(p.Type.Name.Replace("[]", ""));
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

        if (unknownTypes.Any()){
            foreach (var t in unknownTypes){
                imports.Add("import { " + t + " } from './" + t + "';");
            }
        }

        if (c.BaseClass != null) { 
            imports.Add("import { " + c.BaseClass.Name +" } from './" + c.BaseClass.Name + "';");
        }

        if (imports.Any()){
            return string.Join(Environment.NewLine, imports.ToArray()) + Environment.NewLine;
        } else {
            return null;
        }
    }

    string Inherit(Class c)
    {
    if (c.BaseClass!=null)
	    return " extends " + c.BaseClass.ToString();
      else
	     return  "";
    }

}$Classes(*)[$TestClass
export class $Name$Inherit {$Properties[
    $name: $Type;]
}]
/*
    Debug Info:
    $PrintDebugInfo
*/
