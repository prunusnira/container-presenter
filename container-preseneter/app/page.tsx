import ExampleContainer from "@/component/Example.container";

const PageIndex = () => {
  const someSSRdata = fetch('from url');

  return (
      <ExampleContainer
          someSSRdata={someSSRdata}
      />
  )
}

export default PageIndex;