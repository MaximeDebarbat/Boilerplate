const ProviderComposer = ({ contexts = [], children }) =>
    contexts.reduce(
      (acc, [Context, props]) => (
        <Context {...props}>{acc}</Context>
      ),
      children
    );

export default ProviderComposer;
