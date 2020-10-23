import React, {useEffect} from "react"


let tags = ['ALL', 'GATSBY', 'TECH', 'JAVASCRIPT', 'COMPUTER SCIENCE'];


const tagFilterOptions = (data) => {
    //a set can only have unique values, thus removing the need for uncessary filtering or reducing. this uses the spread
    tags = [...set(data.tags)];
    return tags
}


useEffect((data) => {
    // Update the document title using the browser API
    tagFilterOptions();
});
export default () => (
    <div className="flex justify-center text-4xl text-gray-400 h-64">
        {/*{tags.map(i => {*/}
        {/*    if (tags[tags.length - 1] !== i) {*/}
        {/*        return (*/}
        {/*            <div className="my-auto">*/}
        {/*                <div className="inline">{i}</div>*/}
        {/*                <span className="mx-2">/</span>*/}
        {/*            </div>*/}
        {/*        )*/}
        {/*    } else {*/}
        {/*        return (<div className="inline my-auto">{i}</div>)*/}
        {/*    }*/}
        {/*})*/}
        {/*}*/}

        {tags.map(i => {
            if (tags[tags.length - 1] !== i) {
                return (
                    <div className="my-auto">
                        <div className="inline">{i}</div>
                        <span className="mx-2">/</span>
                    </div>
                )
            } else {
                return (<div className="inline my-auto">{i}</div>)
            }
        })}
    </div>
)