import { UI_MODES } from 'helpers/constants/uiMode'
import { RootState } from 'store/main'

export const selectUIMode = (state: RootState) => state.app.uiMode

export const selectIsLightMode = (state: RootState) => state.app.uiMode === UI_MODES.light

export const selectIsPending = (state: RootState) => state.app.isPending

export const selectIsMobileMenuOpened = (state: RootState) => state.app.isMobileMenuOpened
