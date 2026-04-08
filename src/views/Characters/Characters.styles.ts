const alignContainer = "bg-[var(--color-dark-blue)] pt-10 pb-10 min-h-screen";
const alignCharacters = "flex flex-wrap gap-6 justify-center";
const alignPagination = "flex flex-col items-center gap-10";
const paginationContainer = "flex items-center justify-center gap-6 mt-8 pb-6";
const pagination = "flex flex-col";
const alignEmpty =
  "flex flex-col items-center min-h-screen bg-[var(--color-dark-blue)] pt-10 text-[var(--color-off-white)] text-xl gap-10";
const paginationButton =
  "px-5 py-2 rounded-lg bg-green-600 text-white font-medium cursor" +
  "hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer";
const pageInfo = "text-sm text-gray-400 min-w-[80px] text-center";
const fetchingIndicator = "text-center text-xs text-gray-500 mb-2";
const alignTitle = "flex flex-col gap-10 items-center";
const styleTitle =
  "text-xl font-bold text-[var(--color-off-white)] uppercase text-center";

export {
  alignContainer,
  alignCharacters,
  paginationContainer,
  paginationButton,
  pageInfo,
  fetchingIndicator,
  alignPagination,
  pagination,
  alignEmpty,
  alignTitle,
  styleTitle,
};
