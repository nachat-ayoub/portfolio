import { IProjectData } from '../data/services';
import { IProjectsFilter } from '../data/types';

export default function FilterSection({
  data,
  searchFilters,
  setSearchFilters,
}: {
  data: IProjectData | null;
  searchFilters: IProjectsFilter | null;
  setSearchFilters: (
    val:
      | IProjectsFilter
      | null
      | ((val: IProjectsFilter | null) => IProjectsFilter | null)
  ) => void;
}) {
  return (
    <>
      {/* //* Tags */}
      <section className=''>
        <h4 className='capitalize mb-2'>tags:</h4>
        <div className='flex flex-wrap gap-2'>
          <button
            className={`tag ${
              (!searchFilters?.tags || searchFilters?.tags?.length === 0) &&
              'active'
            }`}
            onClick={() => {
              const active =
                !searchFilters?.tags || searchFilters?.tags?.length === 0;

              if (!active) {
                setSearchFilters((val) => ({
                  ...val,
                  tags: [],
                }));
              }
            }}
          >
            All
          </button>
          {data?.tags &&
            data?.tags.map((tag) => (
              <button
                key={tag}
                className={`tag ${
                  searchFilters?.tags &&
                  searchFilters?.tags?.includes(tag) &&
                  'active'
                }`}
                onClick={() => {
                  const active =
                    searchFilters?.tags && searchFilters?.tags?.includes(tag);
                  if (active) {
                    setSearchFilters((val) => ({
                      ...val,
                      tags: (val?.tags ?? []).filter((_tag) => _tag !== tag),
                    }));
                  } else {
                    setSearchFilters((val) => ({
                      ...val,
                      tags: [...(val?.tags ?? []), tag],
                    }));
                  }
                }}
              >
                {tag}
              </button>
            ))}
        </div>
      </section>

      {/* //* Status */}
      <section className=''>
        <h4 className='capitalize mb-2'>status:</h4>
        <div className='flex flex-wrap gap-2'>
          <button
            className={`tag ${!searchFilters?.status && 'active'}`}
            onClick={() => {
              const active =
                !searchFilters?.status || searchFilters?.status === undefined;
              if (!active) {
                setSearchFilters((val) => ({
                  ...val,
                  status: undefined,
                }));
              }
            }}
          >
            All
          </button>
          {data?.status &&
            data?.status.map((_status) => (
              <button
                key={_status}
                className={`tag ${
                  searchFilters?.status &&
                  searchFilters?.status === _status &&
                  'active'
                }`}
                onClick={() => {
                  const active =
                    searchFilters?.status && searchFilters?.status === _status;
                  if (active) {
                    setSearchFilters((val) => ({
                      ...val,
                      status: undefined,
                    }));
                  } else {
                    setSearchFilters((val) => ({
                      ...val,
                      status: _status as IProjectsFilter['status'],
                    }));
                  }
                }}
              >
                {_status}
              </button>
            ))}
        </div>
      </section>
    </>
  );
}
