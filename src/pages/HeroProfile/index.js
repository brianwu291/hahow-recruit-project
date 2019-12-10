import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { compose } from 'redux'
import { UPDATE_HERO_BY_ID } from '../../lib/actions/types'
import get from '../../utils/get'
import { SpinnerWhileLoading } from '../../lib/helpers/HOC'
import NotifyUpdated from '../../components/NotifyUpdated'
import WithUpdate from './components/hoc/WithUpdate'
import WithState from './components/hoc/WithState'
import WithProfileData from './components/hoc/WthProfileData'
import WithRouter from './components/hoc/WithRouter'
import { CountListWrapper } from './styled/styledProfileCount'
import HeroProfileWrapper from './styled/styledHeroProfileWrapper'
import SubmitProfileButton from './components/SubmitProfileButton'
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
    function getSkillName() {
      return Object.keys(dataItem)[0]
    }
    return (
      <ProfileCount
        key={getSkillName()}
        data={dataItem}
        skillName={getSkillName()}
        handleTempHeroDataChange={handleTempHeroDataChange}
        tempTotal={tempTotal}
      />
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
  const dispatch = useDispatch()
  const theme = useSelector((state) => (get(state, 'currentTheme', 'light')))
  function setUpdateHeroStatusToPending() {
    const updateSucceed = updateHeroStatus === 'OK'
    if (updateSucceed) {
      dispatch({
        type: UPDATE_HERO_BY_ID,
        payload: 'pending',
      })
    }
  }
  return (
    <HeroProfileWrapper theme={theme}>
      <NotifyUpdated updateStatus={updateHeroStatus} handleClose={setUpdateHeroStatusToPending} />
      <CountListWrapper>
        {renderProfileCountList(tempTotal, tempHeroDataLists, handleTempHeroDataChange)}
      </CountListWrapper>
      <SubmitProfileButton
        submitTempHeroData={submitTempHeroData}
        tempTotal={tempTotal}
      />
    </HeroProfileWrapper>
  )
}

export default enhance(HeroProfile)
