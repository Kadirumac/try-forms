import React from "react";
import {Usp as UspType} from '../../types'

const Usp:React.FC<UspType>=({date}:UspType)=>{

    return(
        <div className={'try--usp w-100'}>
            {date}
        </div>
    )
}