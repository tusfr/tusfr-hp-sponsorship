import React from 'react';
import { policy_datas } from "./../utils/tableData"


const policy = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: 32 }}>特定商取引法に基づく表記</h1>

            <table>
                <tbody>
                    {/* dangerouslySetInnerHTMLのところXSSの危険性がある */}
                    {policy_datas.map((plain, index) => {
                        const data = plain['content'].replace(/\n/g, '<br />');
                        return (
                            <tr key={index} >
                                <td key={plain.title}>{plain.title}</td>
                                <td key={plain.content} dangerouslySetInnerHTML={{ __html: data }} />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default policy;
