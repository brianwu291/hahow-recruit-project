import React from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'
import get from '../../utils/get'
import { SpinnerWhileLoading } from '../../lib/helpers/HOC'
import NotifyUpdated from '../../components/NotifyUpdated'

import WithUpdate from './components/hoc/WithUpdate'
import WithState from './components/hoc/WithState'
import WithProfileData from './components/hoc/WthProfileData'
import WithRouter from './components/hoc/WithRouter'

import { CountListWrapper } from './styled/styledProfileCount'
import HeroProfileWrapper from './styled/styledHeroProfileWrapper'
import UpdateProfileButton from './components/UpdateProfileButton'
import ProfileCount from './components/ProfileCount'

const enhance = compose(
  WithRouter,
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
  const updateHeroStatus = useSelector((state) => (get(state, 'updateHeroStatus', '')))
  const theme = useSelector((state) => (get(state, 'currentTheme', 'light')))
  return (
    <HeroProfileWrapper theme={theme}>
      <NotifyUpdated updateStatus={updateHeroStatus} />
      <CountListWrapper>
        {renderProfileCountList(tempTotal, tempHeroDataLists, handleTempHeroDataChange)}
      </CountListWrapper>
      <UpdateProfileButton
        submitTempHeroData={submitTempHeroData}
        tempTotal={tempTotal}
      />
    </HeroProfileWrapper>
  )
}

export default enhance(HeroProfile)
