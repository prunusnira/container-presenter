'use client';

import {useMemo} from "react";
import Sub2ExamplePresenter from "@/component/example/Sub2Example.preseneter";

interface Props {
    data: any;
}

/**
 * container는 데이털르 가공하여 presenter로 보내주는 로직을 담고있음
 */
const Sub2ExampleContainer = ({data}: Props) => {
    const someCSRdata = useMemo(() => {return data}, []);

    return (
        <Sub2ExamplePresenter someCSRdata={someCSRdata} />
    )
}

export default Sub2ExampleContainer;