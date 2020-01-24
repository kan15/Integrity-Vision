# Integrity Vision (test task)
We have an array of n objects of the same structure. The structure of the object itself is unknown (types of fields, their attachment level). Fields in an object can be other complex objects, such as Date, string, number, boolean. There is an object of the same structure, but with the types of boolean fields. It is used to set the transformation rules (if the value of the field is true - the field must be in the resulting array). There is also an object with string field types, which stores localized field headers. Names of fields, in which localized headers are stored, correspond to the path to the field in the object, in which its value is stored.

It is necessary to write a code that will create an array of objects of the following structure based on the above described objects:

{

name: "field title." 

value1: "value of field in object #1",

value2: "value of the field in object #2",

 ...
 
value [n-1]: 'value of the field in object no. [n-1] ",

value [n]: "field value in object no. [n]".

}

If a field of boolean type - then print its value as Yes/No, date print in dd.MM.yyyy format
Provide the option that there may be no localization for the field. In this case, instead of localization you should print the name of this field.

example:

[{fullName {surname: "xxx", firstName: "yyy", middleName: "zzz '}}}, {fullName {surname:" XXX ", firstName:" YYY ", middleName:" ZZZ'}}] is an array of objects.

{fullName {surname: true, firstName: true, middleName: false}} - Transformation rule

{"fullName.surname": "last name", "fullName.middleName": "patronymic"} - Localizations

[{name: "Last name", value1: "xxx", value2: "XXX"}, {name: "firstName", value1: "yyy", value2: "YYY"}] - result

