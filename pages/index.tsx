const Index = (props) => {
  const { message } = props;

  return <div>{message}</div>;
};

export async function getStaticProps(context) {
  return {
    props: {
      message: `Hello Next`,
    },
  };
}

export default Index;
