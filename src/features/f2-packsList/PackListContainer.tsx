import React, {useCallback, useEffect, useState} from 'react';

import {AppDispatch, useAppSelector} from '../../store/store';

import {LoadingStatusType} from '../../store/reducers/appReducer';

import {setParamsCardsCount, setParamsPage, setParamsSearchPackName} from '../../store/reducers/packListReducer';

import {PacksList} from './PacksList';

export const PackListContainer = React.memo(() => {

	const dispatch = AppDispatch();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);
	const totalCount = useAppSelector<number>(state => state.packList.cardPacksTotalCount);
	const currentPage = useAppSelector<number>(state => state.packList.page);
	const pageCount = useAppSelector<number>(state => state.packList.pageCount);
	const minRange = useAppSelector<number>(state => state.packList.params.min);
	const maxRange = useAppSelector<number>(state => state.packList.params.max);

	// setParams Pagination
	const setParamsPagination = useCallback((pageCount: number, currentPage: number) => {
		dispatch(setParamsPage(pageCount, currentPage));
	}, [dispatch]);

	// setParams DoubleRange
	const setParamsRange = useCallback((min: number, max: number) => {
		dispatch(setParamsCardsCount(min, max));
	}, [dispatch]);

	// setParams search
	const setParamsSearch = useCallback((packName: string) => {
		dispatch(setParamsSearchPackName(packName));
	}, [dispatch]);

	// loading status transform boolean -> useState
	useEffect(() => {
		if (loadingStatus === 'loading') {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [loadingStatus]);

	return (
		<PacksList
			isLoading={isLoading}
			totalCount={totalCount}
			currentPage={currentPage}
			pageCount={pageCount}
			minRange={minRange}
			maxRange={maxRange}
			setParamsPagination={setParamsPagination}
			setParamsRange={setParamsRange}
			setParamsSearch={setParamsSearch}
		/>
	);
});

