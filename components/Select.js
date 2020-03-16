import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: '1', label: '파트너쉽' },
  { value: '2', label: 'IT 컨설팅' },
  { value: '3', label: 'IT 멘토링' },
  { value: '4', label: '문화센터' },
  { value: '5', label: '그외' },
];
 
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000000' : '#555555',
    borderRadius: 0,
    padding: 16,
    fontSize: 16,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 400,
    padding: '7px 0',
    fontSize: 16,
    border: '1px solid #e6e6e6',
    display: 'flex',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class SelectComp extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        className={this.props.className}
        styles={customStyles}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isSearchable={false}
        placeholder="문의 카테고리 선택"
      />
    );
  }
}

export default SelectComp