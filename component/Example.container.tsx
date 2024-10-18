import SubExampleContainer from "@/component/example/SubExample.container";
import Sub2ExampleContainer from "@/component/example/Sub2Example.container";

interface Props {
    someSSRdata: any;
}

/**
 * - 복잡한 container에는 서브 container를 추가할 수 있음
 * - 각 컨테이너는 서로 연관성이 존재하면 안됨
 */
const ExampleContainer = ({someSSRdata}: Props) => {
    const ssrDataOrganized = () => {
        // do something with ssr data
        return {}
    }

    return (
        <>
            <SubExampleContainer />
            <Sub2ExampleContainer data={ssrDataOrganized()} />
        </>
    )
}

export default ExampleContainer;