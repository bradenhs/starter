interface NodeModule {
  hot?: {
    dispose: (fn: () => void) => void;
  };
}
