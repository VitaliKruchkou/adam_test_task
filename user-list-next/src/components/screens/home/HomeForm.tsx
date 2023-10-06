import { ChangeEvent, FC } from 'react'

import { useStyles } from './Home.style'

interface HomeFormProps {
  searchValue: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const HomeForm: FC<HomeFormProps> = ({ searchValue, handleInputChange, handleSelectChange }) => {
  const styles = useStyles()

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        placeholder="Search ..."
        value={searchValue}
        onChange={handleInputChange}
        aria-label="cost-input"
      />
      <select onChange={handleSelectChange} aria-label="cost-select">
        <option value="">Select from the list</option>
        <option value="dateOfBirth">Date of Birthday</option>
      </select>
    </div>
  )
}

export default HomeForm
