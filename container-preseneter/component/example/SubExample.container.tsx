'use client';

import {useMemo} from "react";
import SubExamplePresenter from "@/component/example/SubExample.preseneter";

/**
 * container는 데이털르 가공하여 presenter로 보내주는 로직을 담고있음
 */
const SubExampleContainer = () => {
    const someCSRdata = useMemo(() => {return {}}, []);

    return (
        <SubExamplePresenter someCSRdata={someCSRdata} />
    )
}

export default SubExampleContainer;