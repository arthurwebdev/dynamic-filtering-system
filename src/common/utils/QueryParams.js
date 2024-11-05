export default class QueryParams {
   static getParsedSearchParams() {
       const querySearchParams = window.location.search;
       return new URLSearchParams(querySearchParams);
   }

   static removeAllQueryParams() {
       QueryParams.updateURL(new URLSearchParams());
   }

   static updateURL(params) {
       const newURL = `${window.location.pathname}?${params.toString()}`;
       window.history.replaceState({}, '', newURL);
   }

   static defineFilters(currentFilters) {
        if (Object.keys(currentFilters)?.length) {
            const currentFiltersJson = encodeURIComponent(JSON.stringify(currentFilters));
            const parsedQueryParams = QueryParams.getParsedSearchParams();
            parsedQueryParams.set('q', currentFiltersJson);
            QueryParams.updateURL(parsedQueryParams);
        } else {
            QueryParams.removeAllQueryParams();
        }
    }
    
    static getAllQueryParams() {
        const params = QueryParams.getParsedSearchParams();
        const queryParamsObject = {};
    
        for (const [key, value] of params.entries()) {
            try {
                queryParamsObject[key] = JSON.parse(decodeURIComponent(value));
            } catch (error) {
                queryParamsObject[key] = value;
            }
        }
    
        return queryParamsObject;
    }
}