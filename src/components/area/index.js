import React from "react";
import Autocomplete from "react-autocomplete";
import PostalCodeDetails from "./table";
import { getAutocomplete, getpostalCode } from "./api";
export default React.memo(function Area() {
  const [autoCompleteData, setAutoCompleteData] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [postalCodes, setPostalCodes] = React.useState([]);
  React.useEffect(() => {
    if (value.length > 3) {
      fetchingData();
    }
  }, [value]);

  const fetchingData = async () => {
    const data = await getAutocomplete(value);
    setAutoCompleteData(data);
  };

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };
  return (
    <>
      <Autocomplete
        getItemValue={(item) => item}
        items={autoCompleteData}
        renderItem={(item, isHighlighted) => (
          <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
            {item}
          </div>
        )}
        value={value}
        onChange={onChange}
        onSelect={async (val) => {
          setValue(val);
          const data = await getpostalCode(val);
          setPostalCodes(data);
        }}
      />
      <PostalCodeDetails data={postalCodes} />
    </>
  );
});
