'use client';

interface Props {
    someCSRdata: { };
}

/**
 * - prseneter는 container에서 가공되어온 값을 표시해주는 역할만 수행함
 * - 아무런 로직도 들어가면 안됨
 * - 함수를 props로 받아서 onClick 등에 사용하는것은 가능함
 * - 여기에 공통 컴포넌트가 샤용되는 경우에는 필요한 값을 넘겨주면 됨
 */
const Sub2ExamplePresenter = ({someCSRdata}: Props) => (
    <>HTML HERE {someCSRdata}</>
)

export default Sub2ExamplePresenter