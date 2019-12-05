import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'
import get from 'lodash/get'
import ThemeContext from '../../ThemeContext'
import { SpinnerWhileLoading } from '../../lib/helpers/HOC'
import NotifyUpdated from '../../components/NotifyUpdated'

import WithUpdate from './components/hoc/WithUpdate'
import WithState from './components/hoc/WithState'
import WithProfileData from './components/hoc/WthProfileData'

import { ProfileCountWrapper } from './styled/styledProfileCount'
import HeroProfileWrapper from './styled/styledHeroProfileWrapper'
import UpdateProfileButton from './components/UpdateProfileButton'
import ProfileCount from './components/ProfileCount'

const enhance = compose(
  WithProfileData,
  SpinnerWhileLoading,
  WithState,
  WithUpdate,
)

function renderProfileCountList(tempTotal, heroDataList, handleTempHeroDataChange) {
  return heroDataList.map((dataItem) => {
    function getPropName() {
      return Object.keys(dataItem)[0]
    }
    return (
      <React.Fragment key={getPropName()}>
        <ProfileCount
          data={dataItem}
          propName={getPropName()}
          handleTempHeroDataChange={handleTempHeroDataChange}
          tempTotal={tempTotal}
        />
      </React.Fragment>
    )
  })
}

const HeroProfile = ({
  tempTotal,
  tempHeroDataLists,
  handleTempHeroDataChange,
  submitTempHeroData,
}) => {
  const { theme } = useContext(ThemeContext)
  const updateHeroStatus = useSelector((state) => (get(state, 'updateHeroStatus', '')))
  return (
    <HeroProfileWrapper theme={theme}>
      <NotifyUpdated updateStatus={updateHeroStatus} />
      <ProfileCountWrapper>
        {renderProfileCountList(tempTotal, tempHeroDataLists, handleTempHeroDataChange)}
      </ProfileCountWrapper>
      <UpdateProfileButton
        submitTempHeroData={submitTempHeroData}
        tempTotal={tempTotal}
      />
    </HeroProfileWrapper>
  )
}

export default enhance(HeroProfile)
