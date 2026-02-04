import {defineDisplay} from "@directus/extensions-sdk";
import DisplayComponent from "./display.vue";

export default defineDisplay({
    id         : "protoqol-formatted-numbers",
    name       : "Formatted numbers",
    icon       : "forward_media",
    description: "Format numbers in a (localised) readable way.",
    component  : DisplayComponent,
    options    : [
        {
            field: "rounding",
            name : "Decimals",
            type : "integer",
            meta : {
                width    : "half",
                interface: "input",
                options  : {
                    placeholder: "2",
                    min        : 0,
                },
            },
        },
        {
            field : "lang",
            name  : "Localisation",
            type  : "string",
            meta  : {
                width    : "half",
                interface: "select-dropdown",
                options  : {
                    choices: [
                        {text: "English", value: "en"},
                        {text: "French", value: "fr"},
                        {text: "German", value: "de"},
                        {text: "Spanish", value: "es"},
                        {text: "Japanese", value: "ja"},
                        {text: "Chinese", value: "zh"},
                    ],
                },
            },
            schema: {
                default_value: "en",
            },
        },
        {
            field: "prefix",
            name : "Prefix",
            type : "string",
            meta : {
                width    : "half",
                interface: "input",
                options  : {
                    placeholder: "€",
                },
            },
        },
        {
            field: "suffix",
            name : "Suffix",
            type : "string",
            meta : {
                width    : "half",
                interface: "input",
                options  : {
                    placeholder: "EUR",
                },
            },
        },
    ],
    types      : ["integer", "bigInteger"],
});
