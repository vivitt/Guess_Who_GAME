import React, { useContext, useState } from "react";

export const SelectedCharContext = React.createContext({});

export const SelectedCharContextProv = ({ children }) => {

    //SELECTED CHAR
    const [ selectedChar, setSelectedChar ] = useState({ 
        "id": '99', 
        // todo name
        //hair
        '0041': false,
        //short hair
        "3141": false,
        //long hair
        "3241": false,
        //"hair-color": 0,
        //blackhair
        '2141': false,
        //brown hair
        "2241": false,
        //blue hair
        "2341": false,
        //green hair
        "2441": false,
        //red hair
        "2541": false,
        //orange hair
        "2641": false,
        //pink hair
        "2741": false,
        //yellow hair
        "2841": false,
        //gray hair
        "2941": false,
        //unknown
        "3041": false,
        //glasses
        '0042': false,
        //blue glasses
        '2342': false,
        //green glasses
        '2442': false,
        //red glasses
        '2542': false,
        //orange glasses
        '2642': false,
        //beard
        '0043': false,
         //short beard
         '3143':false,
         //long beard
         '3243':false,
         //black beard
         '2143': false,
         //blue beard
         '2243': false,
         //pink beard
         '2743': false,
         //gray beard
         '2943': false,
        //earrings
        '0044': false,
        //green earrings
        '2444': false,
        //pink earrings
        '2744': false,
        //yellow earrings
        '2844': false,
        //gray earrings
        '2944': false,
        //hair accessory
        '0045': false,
        //green hair acc
        '2445': false,
        //red hair acc
        '2545': false,
        //pink hair acc
        '2745': false,
        //yellow hair acc
        '2845': false,
        //gray hair acc
        '2945': false,
        //braids
        '0046': false,
        //short braids
        '3146': false,
        //long braids
        '3246': false,
        //black braids
        '2146': false,
        //blue braids
        '2246': false,
        //pink braids
        '2746': false,
        
        // eyes color 
        '0047': true,

        '2147': false,
        '2247': false,
        '2347': false,
        '2447': false,
        '2547': false,
        '2647': false,
        '2747': false,
        '2847': false,
        '2947':false,
    
        "image": "",
        "descr": ""
    })
    
  
    return (
      <SelectedCharContext.Provider value={{selectedChar, setSelectedChar}} >
        {children}
      </SelectedCharContext.Provider>
    );
  }
  
export const useSelectedCharContext = () => useContext(SelectedCharContext)
export default SelectedCharContextProv