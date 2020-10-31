import React, {useEffect, useState} from "react"

export const TagFilter = ({props}) => {
    const [uniqueTags, setUniqueTags] = useState([]);

    const tagFilterOptions = (data) => {
        let tagList = [];
        data.map(i => {
            i.node.tags.tags.map(j => {
                if (tagList.indexOf(j) === -1) {
                    tagList.push(j);
                }
            });
            return tagList;
        });
        return setUniqueTags(tagList);
    };

    useEffect(() => {
        tagFilterOptions(props)
    }, [uniqueTags]);

    return (
        <div className="flex justify-center text-4xl text-gray-400 h-64">
            {uniqueTags.map(i => {

                    if (uniqueTags[uniqueTags.length - 1] !== i) {
                        return (
                            <div className="my-auto">
                                <div className="inline">{i}</div>
                                <span className="mx-2">/</span>
                            </div>
                        )
                    } else {
                        return (<div className="inline my-auto">{i}</div>)
                    }
                }
            )
            }
        </div>)
};
