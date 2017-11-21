import * as http from "http";
import { Store } from "redux";

declare global {
    namespace NextReact {
        interface InitialProps<S> {
            store: Store<S>;
            isServer: boolean;
            req?: http.ServerRequest;
            res?: http.ServerResponse;
        }

        type SFC<P = {}> = StatelessComponent<P>;
        interface StatelessComponent<P = {}> extends React.StatelessComponent<P> {
            getInitialProps?: (InitialProps) => P;
        }

        type Key = string | number;
        interface ReactElement<P> {
            type: string | React.ComponentClass<P> | SFC<P>;
            props: P;
            key: Key | null;
        }
    }
}