import * as React from 'react';
import { createStore, compose, applyMiddleware, Store } from 'redux';
import { connect, Provider, MapDispatchToProps, MapStateToPropsParam } from 'react-redux';
import * as thunk from 'redux-thunk';

interface IProviderWithStoreProps extends React.Props<ProviderWithStore> {
    rootReducer: any;
}

interface IReduxContainerBaseProps {
    condensedLayout?: boolean;
    mapDispatchToProps?: any;
    mapStateToProps?: any;
    pageComponent: React.ComponentClass;
    rootReducer: any;
}

interface IReduxContainerPropsWith<T> extends React.Props<ReduxContainerWith<T>>, IReduxContainerBaseProps {
    pageProps?: T;
}

interface IReduxContainerProps extends React.Props<ReduxContainer>, IReduxContainerBaseProps { }

class ProviderWithStore extends React.Component<IProviderWithStoreProps, {}>{

    private storeBuilder = (rootReducer: any): Store<any> => {

        const enhancer = compose(
            applyMiddleware((thunk as any).default),
            (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
        );

        const store = createStore(rootReducer, {}, enhancer);

        return store;
    }

    render() {

        const { rootReducer } = this.props;

        const store = this.storeBuilder(rootReducer);

        return (
            <Provider store={ store }>
                { this.props.children }
            </Provider>
        );
    }
}

class ReduxContainer extends React.Component<IReduxContainerBaseProps, {}>{

    render() {

        const { mapDispatchToProps, mapStateToProps, pageComponent, rootReducer } = this.props;

        // ReSharper disable once InconsistentNaming
        const AppContainer = connect(mapStateToProps, mapDispatchToProps)(pageComponent);

        return (
            <ProviderWithStore rootReducer={rootReducer}><AppContainer /></ProviderWithStore>
        );
    }
}

class ReduxContainerWith<T> extends React.Component<IReduxContainerPropsWith<T>, {}> {

    render() {

        const { mapDispatchToProps, mapStateToProps, pageComponent, pageProps, rootReducer } = this.props;

        // ReSharper disable once InconsistentNaming
        const AppContainer = connect(mapStateToProps, mapDispatchToProps)(pageComponent);

        return (
            <ProviderWithStore rootReducer={ rootReducer }>
                <AppContainer {...pageProps} />
            </ProviderWithStore>
        );
    }
}

// ReSharper disable once InconsistentNaming
export const ReduxContainerBuilder = () => {

    function reduxContainerFuncWith<T>(reduxContainerProps: IReduxContainerPropsWith<T>) {

        type ReduxContainerFunc<T> = new () => ReduxContainerWith<T>;

        // ReSharper disable once InconsistentNaming
        const TheReduxContainer = ReduxContainerWith as ReduxContainerFunc<T>;

        return <TheReduxContainer {...reduxContainerProps} />;
    }

    return {
        NoneProps: (reduxContainerProps: IReduxContainerProps) => {

            return <ReduxContainer {...reduxContainerProps} />;
        },
        WithProps: reduxContainerFuncWith
    }
}
