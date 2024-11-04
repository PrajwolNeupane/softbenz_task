import { ComponentType, ReactNode } from "react";

type ProviderProps = { children: ReactNode };
type ProviderComponent = ComponentType<ProviderProps>;

export function BuildProviderTree(
  providers: ProviderComponent[]
): ProviderComponent {
  if (providers.length === 1) {
    return providers[0];
  }

  const A = providers.shift() as ProviderComponent;
  const B = providers.shift() as ProviderComponent;

  return BuildProviderTree([
    ({ children }) => (
      <A>
        <B>{children}</B>
      </A>
    ),
    ...providers,
  ]);
}
