import {createContext, useContext, useMemo, useState} from 'react';

type ContextProps = {
	showContent: boolean;
	setShowContent: () => void;
};

type ShowContentProviderProps = {
	children: React.ReactNode;
};

const ShowContentContext = createContext({} as ContextProps);

export function ShowContentProvider({children}: ShowContentProviderProps) {
	const [showContent, setShowContent] = useState(false);

	const values = useMemo(
		() => (
			{showContent, setShowContent() {
				setShowContent(!showContent);
			}}
		),
		[showContent],
	);

	return (
		<ShowContentContext.Provider value={values}>{children}</ShowContentContext.Provider>
	);
}

export function useShowContent(): ContextProps {
	return useContext(ShowContentContext);
}
