const getInitialState = () => ({
    data: {
        "flows":{ "main":[
        "component3",
        "component1",
        "component2", ] }, "components":{ "component1":{
        "type":"radio-group", "title":"s1", "items":{ "item3":{
        "title":"s2", }, "item2":{
        "title":"s3", }, "item1":{
        "title":"s4" }
        }
        }, "component2":{
        "type":"radio-group", "title":"s5", "items":{ "item1":{
        "title":"s6" }, "item2":{
        "title":"s7" } }
        }, "component3":{ "type":"textbox-text", "isMandatory":true, "title":"s8" }
        }, "strings":{
        "en":{ "s1":"Have you been tested positive for COVID in last 14 days?", "s2":"Yes", "s3":"No", "s4":"Not sure", "s5":"Have you Traveled outside in last 14 days?", "s6":"Yes", "s7":"No", "s8":"Enter your name",
        } }
        
        },
  });
  
  
  export const formData = (state =  getInitialState(), action) => {
    switch(action.type) {
       case 'UPDATEINPUT':
         return {
           ...state,
           data:{
             ...state.data,
             strings: {
               ...state.data.strings,
               en: {
                ...state.data.strings.en,
                s9:action.data
               }
             }
            }
           }
     
       case 'UPDATECOVIDTEST':
          return {
            ...state,
            data:{
              ...state.data,
              strings: {
                ...state.data.strings,
                en: {
                 ...state.data.strings.en,
                 s10:action.data
                }
              }
             }
            }
        case 'UPDATETRAVELEDFIELD':
            return {
              ...state,
              data:{
                ...state.data,
                strings: {
                  ...state.data.strings,
                  en: {
                   ...state.data.strings.en,
                   s11:action.data
                  }
                }
               }
              }
  
       default:
         return state;
     }
  };