export const throwErrorToastrAsync = async (error: Error | any) => {
    globalThis.alert(error?.message || 'error inesperado');
};
