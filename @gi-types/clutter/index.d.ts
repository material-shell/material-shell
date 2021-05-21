/**
 * Clutter 7
 *
 * Generated from 7.0
 */

import * as Atk from '@gi-types/atk';
import * as cairo from '@gi-types/cairo';
import * as Cogl from '@gi-types/cogl';
import * as Gio from '@gi-types/gio';
import * as GLib from '@gi-types/glib';
import * as GObject from '@gi-types/gobject';
import * as Graphene from '@gi-types/graphene';
import * as Json from '@gi-types/json';
import * as Pango from '@gi-types/pango';


export const BUTTON_MIDDLE: number;
export const BUTTON_PRIMARY: number;
export const BUTTON_SECONDARY: number;
export const COGL: string;
export const CURRENT_TIME: number;
export const EVENT_PROPAGATE: boolean;
export const EVENT_STOP: boolean;
export const FLAVOUR: string;
export const HAS_WAYLAND_COMPOSITOR_SUPPORT: number;
export const INPUT_EVDEV: string;
export const INPUT_NULL: string;
export const INPUT_X11: string;
export const KEY_0: number;
export const KEY_1: number;
export const KEY_2: number;
export const KEY_3: number;
export const KEY_3270_AltCursor: number;
export const KEY_3270_Attn: number;
export const KEY_3270_BackTab: number;
export const KEY_3270_ChangeScreen: number;
export const KEY_3270_Copy: number;
export const KEY_3270_CursorBlink: number;
export const KEY_3270_CursorSelect: number;
export const KEY_3270_DeleteWord: number;
export const KEY_3270_Duplicate: number;
export const KEY_3270_Enter: number;
export const KEY_3270_EraseEOF: number;
export const KEY_3270_EraseInput: number;
export const KEY_3270_ExSelect: number;
export const KEY_3270_FieldMark: number;
export const KEY_3270_Ident: number;
export const KEY_3270_Jump: number;
export const KEY_3270_KeyClick: number;
export const KEY_3270_Left2: number;
export const KEY_3270_PA1: number;
export const KEY_3270_PA2: number;
export const KEY_3270_PA3: number;
export const KEY_3270_Play: number;
export const KEY_3270_PrintScreen: number;
export const KEY_3270_Quit: number;
export const KEY_3270_Record: number;
export const KEY_3270_Reset: number;
export const KEY_3270_Right2: number;
export const KEY_3270_Rule: number;
export const KEY_3270_Setup: number;
export const KEY_3270_Test: number;
export const KEY_4: number;
export const KEY_5: number;
export const KEY_6: number;
export const KEY_7: number;
export const KEY_8: number;
export const KEY_9: number;
export const KEY_A: number;
export const KEY_AE: number;
export const KEY_Aacute: number;
export const KEY_Abelowdot: number;
export const KEY_Abreve: number;
export const KEY_Abreveacute: number;
export const KEY_Abrevebelowdot: number;
export const KEY_Abrevegrave: number;
export const KEY_Abrevehook: number;
export const KEY_Abrevetilde: number;
export const KEY_AccessX_Enable: number;
export const KEY_AccessX_Feedback_Enable: number;
export const KEY_Acircumflex: number;
export const KEY_Acircumflexacute: number;
export const KEY_Acircumflexbelowdot: number;
export const KEY_Acircumflexgrave: number;
export const KEY_Acircumflexhook: number;
export const KEY_Acircumflextilde: number;
export const KEY_AddFavorite: number;
export const KEY_Adiaeresis: number;
export const KEY_Agrave: number;
export const KEY_Ahook: number;
export const KEY_Alt_L: number;
export const KEY_Alt_R: number;
export const KEY_Amacron: number;
export const KEY_Aogonek: number;
export const KEY_ApplicationLeft: number;
export const KEY_ApplicationRight: number;
export const KEY_Arabic_0: number;
export const KEY_Arabic_1: number;
export const KEY_Arabic_2: number;
export const KEY_Arabic_3: number;
export const KEY_Arabic_4: number;
export const KEY_Arabic_5: number;
export const KEY_Arabic_6: number;
export const KEY_Arabic_7: number;
export const KEY_Arabic_8: number;
export const KEY_Arabic_9: number;
export const KEY_Arabic_ain: number;
export const KEY_Arabic_alef: number;
export const KEY_Arabic_alefmaksura: number;
export const KEY_Arabic_beh: number;
export const KEY_Arabic_comma: number;
export const KEY_Arabic_dad: number;
export const KEY_Arabic_dal: number;
export const KEY_Arabic_damma: number;
export const KEY_Arabic_dammatan: number;
export const KEY_Arabic_ddal: number;
export const KEY_Arabic_farsi_yeh: number;
export const KEY_Arabic_fatha: number;
export const KEY_Arabic_fathatan: number;
export const KEY_Arabic_feh: number;
export const KEY_Arabic_fullstop: number;
export const KEY_Arabic_gaf: number;
export const KEY_Arabic_ghain: number;
export const KEY_Arabic_ha: number;
export const KEY_Arabic_hah: number;
export const KEY_Arabic_hamza: number;
export const KEY_Arabic_hamza_above: number;
export const KEY_Arabic_hamza_below: number;
export const KEY_Arabic_hamzaonalef: number;
export const KEY_Arabic_hamzaonwaw: number;
export const KEY_Arabic_hamzaonyeh: number;
export const KEY_Arabic_hamzaunderalef: number;
export const KEY_Arabic_heh: number;
export const KEY_Arabic_heh_doachashmee: number;
export const KEY_Arabic_heh_goal: number;
export const KEY_Arabic_jeem: number;
export const KEY_Arabic_jeh: number;
export const KEY_Arabic_kaf: number;
export const KEY_Arabic_kasra: number;
export const KEY_Arabic_kasratan: number;
export const KEY_Arabic_keheh: number;
export const KEY_Arabic_khah: number;
export const KEY_Arabic_lam: number;
export const KEY_Arabic_madda_above: number;
export const KEY_Arabic_maddaonalef: number;
export const KEY_Arabic_meem: number;
export const KEY_Arabic_noon: number;
export const KEY_Arabic_noon_ghunna: number;
export const KEY_Arabic_peh: number;
export const KEY_Arabic_percent: number;
export const KEY_Arabic_qaf: number;
export const KEY_Arabic_question_mark: number;
export const KEY_Arabic_ra: number;
export const KEY_Arabic_rreh: number;
export const KEY_Arabic_sad: number;
export const KEY_Arabic_seen: number;
export const KEY_Arabic_semicolon: number;
export const KEY_Arabic_shadda: number;
export const KEY_Arabic_sheen: number;
export const KEY_Arabic_sukun: number;
export const KEY_Arabic_superscript_alef: number;
export const KEY_Arabic_switch: number;
export const KEY_Arabic_tah: number;
export const KEY_Arabic_tatweel: number;
export const KEY_Arabic_tcheh: number;
export const KEY_Arabic_teh: number;
export const KEY_Arabic_tehmarbuta: number;
export const KEY_Arabic_thal: number;
export const KEY_Arabic_theh: number;
export const KEY_Arabic_tteh: number;
export const KEY_Arabic_veh: number;
export const KEY_Arabic_waw: number;
export const KEY_Arabic_yeh: number;
export const KEY_Arabic_yeh_baree: number;
export const KEY_Arabic_zah: number;
export const KEY_Arabic_zain: number;
export const KEY_Aring: number;
export const KEY_Armenian_AT: number;
export const KEY_Armenian_AYB: number;
export const KEY_Armenian_BEN: number;
export const KEY_Armenian_CHA: number;
export const KEY_Armenian_DA: number;
export const KEY_Armenian_DZA: number;
export const KEY_Armenian_E: number;
export const KEY_Armenian_FE: number;
export const KEY_Armenian_GHAT: number;
export const KEY_Armenian_GIM: number;
export const KEY_Armenian_HI: number;
export const KEY_Armenian_HO: number;
export const KEY_Armenian_INI: number;
export const KEY_Armenian_JE: number;
export const KEY_Armenian_KE: number;
export const KEY_Armenian_KEN: number;
export const KEY_Armenian_KHE: number;
export const KEY_Armenian_LYUN: number;
export const KEY_Armenian_MEN: number;
export const KEY_Armenian_NU: number;
export const KEY_Armenian_O: number;
export const KEY_Armenian_PE: number;
export const KEY_Armenian_PYUR: number;
export const KEY_Armenian_RA: number;
export const KEY_Armenian_RE: number;
export const KEY_Armenian_SE: number;
export const KEY_Armenian_SHA: number;
export const KEY_Armenian_TCHE: number;
export const KEY_Armenian_TO: number;
export const KEY_Armenian_TSA: number;
export const KEY_Armenian_TSO: number;
export const KEY_Armenian_TYUN: number;
export const KEY_Armenian_VEV: number;
export const KEY_Armenian_VO: number;
export const KEY_Armenian_VYUN: number;
export const KEY_Armenian_YECH: number;
export const KEY_Armenian_ZA: number;
export const KEY_Armenian_ZHE: number;
export const KEY_Armenian_accent: number;
export const KEY_Armenian_amanak: number;
export const KEY_Armenian_apostrophe: number;
export const KEY_Armenian_at: number;
export const KEY_Armenian_ayb: number;
export const KEY_Armenian_ben: number;
export const KEY_Armenian_but: number;
export const KEY_Armenian_cha: number;
export const KEY_Armenian_da: number;
export const KEY_Armenian_dza: number;
export const KEY_Armenian_e: number;
export const KEY_Armenian_exclam: number;
export const KEY_Armenian_fe: number;
export const KEY_Armenian_full_stop: number;
export const KEY_Armenian_ghat: number;
export const KEY_Armenian_gim: number;
export const KEY_Armenian_hi: number;
export const KEY_Armenian_ho: number;
export const KEY_Armenian_hyphen: number;
export const KEY_Armenian_ini: number;
export const KEY_Armenian_je: number;
export const KEY_Armenian_ke: number;
export const KEY_Armenian_ken: number;
export const KEY_Armenian_khe: number;
export const KEY_Armenian_ligature_ew: number;
export const KEY_Armenian_lyun: number;
export const KEY_Armenian_men: number;
export const KEY_Armenian_nu: number;
export const KEY_Armenian_o: number;
export const KEY_Armenian_paruyk: number;
export const KEY_Armenian_pe: number;
export const KEY_Armenian_pyur: number;
export const KEY_Armenian_question: number;
export const KEY_Armenian_ra: number;
export const KEY_Armenian_re: number;
export const KEY_Armenian_se: number;
export const KEY_Armenian_separation_mark: number;
export const KEY_Armenian_sha: number;
export const KEY_Armenian_shesht: number;
export const KEY_Armenian_tche: number;
export const KEY_Armenian_to: number;
export const KEY_Armenian_tsa: number;
export const KEY_Armenian_tso: number;
export const KEY_Armenian_tyun: number;
export const KEY_Armenian_verjaket: number;
export const KEY_Armenian_vev: number;
export const KEY_Armenian_vo: number;
export const KEY_Armenian_vyun: number;
export const KEY_Armenian_yech: number;
export const KEY_Armenian_yentamna: number;
export const KEY_Armenian_za: number;
export const KEY_Armenian_zhe: number;
export const KEY_Atilde: number;
export const KEY_AudibleBell_Enable: number;
export const KEY_AudioCycleTrack: number;
export const KEY_AudioForward: number;
export const KEY_AudioLowerVolume: number;
export const KEY_AudioMedia: number;
export const KEY_AudioMicMute: number;
export const KEY_AudioMute: number;
export const KEY_AudioNext: number;
export const KEY_AudioPause: number;
export const KEY_AudioPlay: number;
export const KEY_AudioPrev: number;
export const KEY_AudioRaiseVolume: number;
export const KEY_AudioRandomPlay: number;
export const KEY_AudioRecord: number;
export const KEY_AudioRepeat: number;
export const KEY_AudioRewind: number;
export const KEY_AudioStop: number;
export const KEY_Away: number;
export const KEY_B: number;
export const KEY_Babovedot: number;
export const KEY_Back: number;
export const KEY_BackForward: number;
export const KEY_BackSpace: number;
export const KEY_Battery: number;
export const KEY_Begin: number;
export const KEY_Blue: number;
export const KEY_Bluetooth: number;
export const KEY_Book: number;
export const KEY_BounceKeys_Enable: number;
export const KEY_Break: number;
export const KEY_BrightnessAdjust: number;
export const KEY_Byelorussian_SHORTU: number;
export const KEY_Byelorussian_shortu: number;
export const KEY_C: number;
export const KEY_CD: number;
export const KEY_CH: number;
export const KEY_C_H: number;
export const KEY_C_h: number;
export const KEY_Cabovedot: number;
export const KEY_Cacute: number;
export const KEY_Calculator: number;
export const KEY_Calendar: number;
export const KEY_Cancel: number;
export const KEY_Caps_Lock: number;
export const KEY_Ccaron: number;
export const KEY_Ccedilla: number;
export const KEY_Ccircumflex: number;
export const KEY_Ch: number;
export const KEY_Clear: number;
export const KEY_ClearGrab: number;
export const KEY_Close: number;
export const KEY_Codeinput: number;
export const KEY_ColonSign: number;
export const KEY_Community: number;
export const KEY_ContrastAdjust: number;
export const KEY_Control_L: number;
export const KEY_Control_R: number;
export const KEY_Copy: number;
export const KEY_CruzeiroSign: number;
export const KEY_Cut: number;
export const KEY_CycleAngle: number;
export const KEY_Cyrillic_A: number;
export const KEY_Cyrillic_BE: number;
export const KEY_Cyrillic_CHE: number;
export const KEY_Cyrillic_CHE_descender: number;
export const KEY_Cyrillic_CHE_vertstroke: number;
export const KEY_Cyrillic_DE: number;
export const KEY_Cyrillic_DZHE: number;
export const KEY_Cyrillic_E: number;
export const KEY_Cyrillic_EF: number;
export const KEY_Cyrillic_EL: number;
export const KEY_Cyrillic_EM: number;
export const KEY_Cyrillic_EN: number;
export const KEY_Cyrillic_EN_descender: number;
export const KEY_Cyrillic_ER: number;
export const KEY_Cyrillic_ES: number;
export const KEY_Cyrillic_GHE: number;
export const KEY_Cyrillic_GHE_bar: number;
export const KEY_Cyrillic_HA: number;
export const KEY_Cyrillic_HARDSIGN: number;
export const KEY_Cyrillic_HA_descender: number;
export const KEY_Cyrillic_I: number;
export const KEY_Cyrillic_IE: number;
export const KEY_Cyrillic_IO: number;
export const KEY_Cyrillic_I_macron: number;
export const KEY_Cyrillic_JE: number;
export const KEY_Cyrillic_KA: number;
export const KEY_Cyrillic_KA_descender: number;
export const KEY_Cyrillic_KA_vertstroke: number;
export const KEY_Cyrillic_LJE: number;
export const KEY_Cyrillic_NJE: number;
export const KEY_Cyrillic_O: number;
export const KEY_Cyrillic_O_bar: number;
export const KEY_Cyrillic_PE: number;
export const KEY_Cyrillic_SCHWA: number;
export const KEY_Cyrillic_SHA: number;
export const KEY_Cyrillic_SHCHA: number;
export const KEY_Cyrillic_SHHA: number;
export const KEY_Cyrillic_SHORTI: number;
export const KEY_Cyrillic_SOFTSIGN: number;
export const KEY_Cyrillic_TE: number;
export const KEY_Cyrillic_TSE: number;
export const KEY_Cyrillic_U: number;
export const KEY_Cyrillic_U_macron: number;
export const KEY_Cyrillic_U_straight: number;
export const KEY_Cyrillic_U_straight_bar: number;
export const KEY_Cyrillic_VE: number;
export const KEY_Cyrillic_YA: number;
export const KEY_Cyrillic_YERU: number;
export const KEY_Cyrillic_YU: number;
export const KEY_Cyrillic_ZE: number;
export const KEY_Cyrillic_ZHE: number;
export const KEY_Cyrillic_ZHE_descender: number;
export const KEY_Cyrillic_a: number;
export const KEY_Cyrillic_be: number;
export const KEY_Cyrillic_che: number;
export const KEY_Cyrillic_che_descender: number;
export const KEY_Cyrillic_che_vertstroke: number;
export const KEY_Cyrillic_de: number;
export const KEY_Cyrillic_dzhe: number;
export const KEY_Cyrillic_e: number;
export const KEY_Cyrillic_ef: number;
export const KEY_Cyrillic_el: number;
export const KEY_Cyrillic_em: number;
export const KEY_Cyrillic_en: number;
export const KEY_Cyrillic_en_descender: number;
export const KEY_Cyrillic_er: number;
export const KEY_Cyrillic_es: number;
export const KEY_Cyrillic_ghe: number;
export const KEY_Cyrillic_ghe_bar: number;
export const KEY_Cyrillic_ha: number;
export const KEY_Cyrillic_ha_descender: number;
export const KEY_Cyrillic_hardsign: number;
export const KEY_Cyrillic_i: number;
export const KEY_Cyrillic_i_macron: number;
export const KEY_Cyrillic_ie: number;
export const KEY_Cyrillic_io: number;
export const KEY_Cyrillic_je: number;
export const KEY_Cyrillic_ka: number;
export const KEY_Cyrillic_ka_descender: number;
export const KEY_Cyrillic_ka_vertstroke: number;
export const KEY_Cyrillic_lje: number;
export const KEY_Cyrillic_nje: number;
export const KEY_Cyrillic_o: number;
export const KEY_Cyrillic_o_bar: number;
export const KEY_Cyrillic_pe: number;
export const KEY_Cyrillic_schwa: number;
export const KEY_Cyrillic_sha: number;
export const KEY_Cyrillic_shcha: number;
export const KEY_Cyrillic_shha: number;
export const KEY_Cyrillic_shorti: number;
export const KEY_Cyrillic_softsign: number;
export const KEY_Cyrillic_te: number;
export const KEY_Cyrillic_tse: number;
export const KEY_Cyrillic_u: number;
export const KEY_Cyrillic_u_macron: number;
export const KEY_Cyrillic_u_straight: number;
export const KEY_Cyrillic_u_straight_bar: number;
export const KEY_Cyrillic_ve: number;
export const KEY_Cyrillic_ya: number;
export const KEY_Cyrillic_yeru: number;
export const KEY_Cyrillic_yu: number;
export const KEY_Cyrillic_ze: number;
export const KEY_Cyrillic_zhe: number;
export const KEY_Cyrillic_zhe_descender: number;
export const KEY_D: number;
export const KEY_DOS: number;
export const KEY_Dabovedot: number;
export const KEY_Dcaron: number;
export const KEY_Delete: number;
export const KEY_Display: number;
export const KEY_Documents: number;
export const KEY_DongSign: number;
export const KEY_Down: number;
export const KEY_Dstroke: number;
export const KEY_E: number;
export const KEY_ENG: number;
export const KEY_ETH: number;
export const KEY_EZH: number;
export const KEY_Eabovedot: number;
export const KEY_Eacute: number;
export const KEY_Ebelowdot: number;
export const KEY_Ecaron: number;
export const KEY_Ecircumflex: number;
export const KEY_Ecircumflexacute: number;
export const KEY_Ecircumflexbelowdot: number;
export const KEY_Ecircumflexgrave: number;
export const KEY_Ecircumflexhook: number;
export const KEY_Ecircumflextilde: number;
export const KEY_EcuSign: number;
export const KEY_Ediaeresis: number;
export const KEY_Egrave: number;
export const KEY_Ehook: number;
export const KEY_Eisu_Shift: number;
export const KEY_Eisu_toggle: number;
export const KEY_Eject: number;
export const KEY_Emacron: number;
export const KEY_End: number;
export const KEY_Eogonek: number;
export const KEY_Escape: number;
export const KEY_Eth: number;
export const KEY_Etilde: number;
export const KEY_EuroSign: number;
export const KEY_Excel: number;
export const KEY_Execute: number;
export const KEY_Explorer: number;
export const KEY_F: number;
export const KEY_F1: number;
export const KEY_F10: number;
export const KEY_F11: number;
export const KEY_F12: number;
export const KEY_F13: number;
export const KEY_F14: number;
export const KEY_F15: number;
export const KEY_F16: number;
export const KEY_F17: number;
export const KEY_F18: number;
export const KEY_F19: number;
export const KEY_F2: number;
export const KEY_F20: number;
export const KEY_F21: number;
export const KEY_F22: number;
export const KEY_F23: number;
export const KEY_F24: number;
export const KEY_F25: number;
export const KEY_F26: number;
export const KEY_F27: number;
export const KEY_F28: number;
export const KEY_F29: number;
export const KEY_F3: number;
export const KEY_F30: number;
export const KEY_F31: number;
export const KEY_F32: number;
export const KEY_F33: number;
export const KEY_F34: number;
export const KEY_F35: number;
export const KEY_F4: number;
export const KEY_F5: number;
export const KEY_F6: number;
export const KEY_F7: number;
export const KEY_F8: number;
export const KEY_F9: number;
export const KEY_FFrancSign: number;
export const KEY_Fabovedot: number;
export const KEY_Farsi_0: number;
export const KEY_Farsi_1: number;
export const KEY_Farsi_2: number;
export const KEY_Farsi_3: number;
export const KEY_Farsi_4: number;
export const KEY_Farsi_5: number;
export const KEY_Farsi_6: number;
export const KEY_Farsi_7: number;
export const KEY_Farsi_8: number;
export const KEY_Farsi_9: number;
export const KEY_Farsi_yeh: number;
export const KEY_Favorites: number;
export const KEY_Finance: number;
export const KEY_Find: number;
export const KEY_First_Virtual_Screen: number;
export const KEY_Forward: number;
export const KEY_FrameBack: number;
export const KEY_FrameForward: number;
export const KEY_G: number;
export const KEY_Gabovedot: number;
export const KEY_Game: number;
export const KEY_Gbreve: number;
export const KEY_Gcaron: number;
export const KEY_Gcedilla: number;
export const KEY_Gcircumflex: number;
export const KEY_Georgian_an: number;
export const KEY_Georgian_ban: number;
export const KEY_Georgian_can: number;
export const KEY_Georgian_char: number;
export const KEY_Georgian_chin: number;
export const KEY_Georgian_cil: number;
export const KEY_Georgian_don: number;
export const KEY_Georgian_en: number;
export const KEY_Georgian_fi: number;
export const KEY_Georgian_gan: number;
export const KEY_Georgian_ghan: number;
export const KEY_Georgian_hae: number;
export const KEY_Georgian_har: number;
export const KEY_Georgian_he: number;
export const KEY_Georgian_hie: number;
export const KEY_Georgian_hoe: number;
export const KEY_Georgian_in: number;
export const KEY_Georgian_jhan: number;
export const KEY_Georgian_jil: number;
export const KEY_Georgian_kan: number;
export const KEY_Georgian_khar: number;
export const KEY_Georgian_las: number;
export const KEY_Georgian_man: number;
export const KEY_Georgian_nar: number;
export const KEY_Georgian_on: number;
export const KEY_Georgian_par: number;
export const KEY_Georgian_phar: number;
export const KEY_Georgian_qar: number;
export const KEY_Georgian_rae: number;
export const KEY_Georgian_san: number;
export const KEY_Georgian_shin: number;
export const KEY_Georgian_tan: number;
export const KEY_Georgian_tar: number;
export const KEY_Georgian_un: number;
export const KEY_Georgian_vin: number;
export const KEY_Georgian_we: number;
export const KEY_Georgian_xan: number;
export const KEY_Georgian_zen: number;
export const KEY_Georgian_zhar: number;
export const KEY_Go: number;
export const KEY_Greek_ALPHA: number;
export const KEY_Greek_ALPHAaccent: number;
export const KEY_Greek_BETA: number;
export const KEY_Greek_CHI: number;
export const KEY_Greek_DELTA: number;
export const KEY_Greek_EPSILON: number;
export const KEY_Greek_EPSILONaccent: number;
export const KEY_Greek_ETA: number;
export const KEY_Greek_ETAaccent: number;
export const KEY_Greek_GAMMA: number;
export const KEY_Greek_IOTA: number;
export const KEY_Greek_IOTAaccent: number;
export const KEY_Greek_IOTAdiaeresis: number;
export const KEY_Greek_IOTAdieresis: number;
export const KEY_Greek_KAPPA: number;
export const KEY_Greek_LAMBDA: number;
export const KEY_Greek_LAMDA: number;
export const KEY_Greek_MU: number;
export const KEY_Greek_NU: number;
export const KEY_Greek_OMEGA: number;
export const KEY_Greek_OMEGAaccent: number;
export const KEY_Greek_OMICRON: number;
export const KEY_Greek_OMICRONaccent: number;
export const KEY_Greek_PHI: number;
export const KEY_Greek_PI: number;
export const KEY_Greek_PSI: number;
export const KEY_Greek_RHO: number;
export const KEY_Greek_SIGMA: number;
export const KEY_Greek_TAU: number;
export const KEY_Greek_THETA: number;
export const KEY_Greek_UPSILON: number;
export const KEY_Greek_UPSILONaccent: number;
export const KEY_Greek_UPSILONdieresis: number;
export const KEY_Greek_XI: number;
export const KEY_Greek_ZETA: number;
export const KEY_Greek_accentdieresis: number;
export const KEY_Greek_alpha: number;
export const KEY_Greek_alphaaccent: number;
export const KEY_Greek_beta: number;
export const KEY_Greek_chi: number;
export const KEY_Greek_delta: number;
export const KEY_Greek_epsilon: number;
export const KEY_Greek_epsilonaccent: number;
export const KEY_Greek_eta: number;
export const KEY_Greek_etaaccent: number;
export const KEY_Greek_finalsmallsigma: number;
export const KEY_Greek_gamma: number;
export const KEY_Greek_horizbar: number;
export const KEY_Greek_iota: number;
export const KEY_Greek_iotaaccent: number;
export const KEY_Greek_iotaaccentdieresis: number;
export const KEY_Greek_iotadieresis: number;
export const KEY_Greek_kappa: number;
export const KEY_Greek_lambda: number;
export const KEY_Greek_lamda: number;
export const KEY_Greek_mu: number;
export const KEY_Greek_nu: number;
export const KEY_Greek_omega: number;
export const KEY_Greek_omegaaccent: number;
export const KEY_Greek_omicron: number;
export const KEY_Greek_omicronaccent: number;
export const KEY_Greek_phi: number;
export const KEY_Greek_pi: number;
export const KEY_Greek_psi: number;
export const KEY_Greek_rho: number;
export const KEY_Greek_sigma: number;
export const KEY_Greek_switch: number;
export const KEY_Greek_tau: number;
export const KEY_Greek_theta: number;
export const KEY_Greek_upsilon: number;
export const KEY_Greek_upsilonaccent: number;
export const KEY_Greek_upsilonaccentdieresis: number;
export const KEY_Greek_upsilondieresis: number;
export const KEY_Greek_xi: number;
export const KEY_Greek_zeta: number;
export const KEY_Green: number;
export const KEY_H: number;
export const KEY_Hangul: number;
export const KEY_Hangul_A: number;
export const KEY_Hangul_AE: number;
export const KEY_Hangul_AraeA: number;
export const KEY_Hangul_AraeAE: number;
export const KEY_Hangul_Banja: number;
export const KEY_Hangul_Cieuc: number;
export const KEY_Hangul_Codeinput: number;
export const KEY_Hangul_Dikeud: number;
export const KEY_Hangul_E: number;
export const KEY_Hangul_EO: number;
export const KEY_Hangul_EU: number;
export const KEY_Hangul_End: number;
export const KEY_Hangul_Hanja: number;
export const KEY_Hangul_Hieuh: number;
export const KEY_Hangul_I: number;
export const KEY_Hangul_Ieung: number;
export const KEY_Hangul_J_Cieuc: number;
export const KEY_Hangul_J_Dikeud: number;
export const KEY_Hangul_J_Hieuh: number;
export const KEY_Hangul_J_Ieung: number;
export const KEY_Hangul_J_Jieuj: number;
export const KEY_Hangul_J_Khieuq: number;
export const KEY_Hangul_J_Kiyeog: number;
export const KEY_Hangul_J_KiyeogSios: number;
export const KEY_Hangul_J_KkogjiDalrinIeung: number;
export const KEY_Hangul_J_Mieum: number;
export const KEY_Hangul_J_Nieun: number;
export const KEY_Hangul_J_NieunHieuh: number;
export const KEY_Hangul_J_NieunJieuj: number;
export const KEY_Hangul_J_PanSios: number;
export const KEY_Hangul_J_Phieuf: number;
export const KEY_Hangul_J_Pieub: number;
export const KEY_Hangul_J_PieubSios: number;
export const KEY_Hangul_J_Rieul: number;
export const KEY_Hangul_J_RieulHieuh: number;
export const KEY_Hangul_J_RieulKiyeog: number;
export const KEY_Hangul_J_RieulMieum: number;
export const KEY_Hangul_J_RieulPhieuf: number;
export const KEY_Hangul_J_RieulPieub: number;
export const KEY_Hangul_J_RieulSios: number;
export const KEY_Hangul_J_RieulTieut: number;
export const KEY_Hangul_J_Sios: number;
export const KEY_Hangul_J_SsangKiyeog: number;
export const KEY_Hangul_J_SsangSios: number;
export const KEY_Hangul_J_Tieut: number;
export const KEY_Hangul_J_YeorinHieuh: number;
export const KEY_Hangul_Jamo: number;
export const KEY_Hangul_Jeonja: number;
export const KEY_Hangul_Jieuj: number;
export const KEY_Hangul_Khieuq: number;
export const KEY_Hangul_Kiyeog: number;
export const KEY_Hangul_KiyeogSios: number;
export const KEY_Hangul_KkogjiDalrinIeung: number;
export const KEY_Hangul_Mieum: number;
export const KEY_Hangul_MultipleCandidate: number;
export const KEY_Hangul_Nieun: number;
export const KEY_Hangul_NieunHieuh: number;
export const KEY_Hangul_NieunJieuj: number;
export const KEY_Hangul_O: number;
export const KEY_Hangul_OE: number;
export const KEY_Hangul_PanSios: number;
export const KEY_Hangul_Phieuf: number;
export const KEY_Hangul_Pieub: number;
export const KEY_Hangul_PieubSios: number;
export const KEY_Hangul_PostHanja: number;
export const KEY_Hangul_PreHanja: number;
export const KEY_Hangul_PreviousCandidate: number;
export const KEY_Hangul_Rieul: number;
export const KEY_Hangul_RieulHieuh: number;
export const KEY_Hangul_RieulKiyeog: number;
export const KEY_Hangul_RieulMieum: number;
export const KEY_Hangul_RieulPhieuf: number;
export const KEY_Hangul_RieulPieub: number;
export const KEY_Hangul_RieulSios: number;
export const KEY_Hangul_RieulTieut: number;
export const KEY_Hangul_RieulYeorinHieuh: number;
export const KEY_Hangul_Romaja: number;
export const KEY_Hangul_SingleCandidate: number;
export const KEY_Hangul_Sios: number;
export const KEY_Hangul_Special: number;
export const KEY_Hangul_SsangDikeud: number;
export const KEY_Hangul_SsangJieuj: number;
export const KEY_Hangul_SsangKiyeog: number;
export const KEY_Hangul_SsangPieub: number;
export const KEY_Hangul_SsangSios: number;
export const KEY_Hangul_Start: number;
export const KEY_Hangul_SunkyeongeumMieum: number;
export const KEY_Hangul_SunkyeongeumPhieuf: number;
export const KEY_Hangul_SunkyeongeumPieub: number;
export const KEY_Hangul_Tieut: number;
export const KEY_Hangul_U: number;
export const KEY_Hangul_WA: number;
export const KEY_Hangul_WAE: number;
export const KEY_Hangul_WE: number;
export const KEY_Hangul_WEO: number;
export const KEY_Hangul_WI: number;
export const KEY_Hangul_YA: number;
export const KEY_Hangul_YAE: number;
export const KEY_Hangul_YE: number;
export const KEY_Hangul_YEO: number;
export const KEY_Hangul_YI: number;
export const KEY_Hangul_YO: number;
export const KEY_Hangul_YU: number;
export const KEY_Hangul_YeorinHieuh: number;
export const KEY_Hangul_switch: number;
export const KEY_Hankaku: number;
export const KEY_Hcircumflex: number;
export const KEY_Hebrew_switch: number;
export const KEY_Help: number;
export const KEY_Henkan: number;
export const KEY_Henkan_Mode: number;
export const KEY_Hibernate: number;
export const KEY_Hiragana: number;
export const KEY_Hiragana_Katakana: number;
export const KEY_History: number;
export const KEY_Home: number;
export const KEY_HomePage: number;
export const KEY_HotLinks: number;
export const KEY_Hstroke: number;
export const KEY_Hyper_L: number;
export const KEY_Hyper_R: number;
export const KEY_I: number;
export const KEY_ISO_Center_Object: number;
export const KEY_ISO_Continuous_Underline: number;
export const KEY_ISO_Discontinuous_Underline: number;
export const KEY_ISO_Emphasize: number;
export const KEY_ISO_Enter: number;
export const KEY_ISO_Fast_Cursor_Down: number;
export const KEY_ISO_Fast_Cursor_Left: number;
export const KEY_ISO_Fast_Cursor_Right: number;
export const KEY_ISO_Fast_Cursor_Up: number;
export const KEY_ISO_First_Group: number;
export const KEY_ISO_First_Group_Lock: number;
export const KEY_ISO_Group_Latch: number;
export const KEY_ISO_Group_Lock: number;
export const KEY_ISO_Group_Shift: number;
export const KEY_ISO_Last_Group: number;
export const KEY_ISO_Last_Group_Lock: number;
export const KEY_ISO_Left_Tab: number;
export const KEY_ISO_Level2_Latch: number;
export const KEY_ISO_Level3_Latch: number;
export const KEY_ISO_Level3_Lock: number;
export const KEY_ISO_Level3_Shift: number;
export const KEY_ISO_Level5_Latch: number;
export const KEY_ISO_Level5_Lock: number;
export const KEY_ISO_Level5_Shift: number;
export const KEY_ISO_Lock: number;
export const KEY_ISO_Move_Line_Down: number;
export const KEY_ISO_Move_Line_Up: number;
export const KEY_ISO_Next_Group: number;
export const KEY_ISO_Next_Group_Lock: number;
export const KEY_ISO_Partial_Line_Down: number;
export const KEY_ISO_Partial_Line_Up: number;
export const KEY_ISO_Partial_Space_Left: number;
export const KEY_ISO_Partial_Space_Right: number;
export const KEY_ISO_Prev_Group: number;
export const KEY_ISO_Prev_Group_Lock: number;
export const KEY_ISO_Release_Both_Margins: number;
export const KEY_ISO_Release_Margin_Left: number;
export const KEY_ISO_Release_Margin_Right: number;
export const KEY_ISO_Set_Margin_Left: number;
export const KEY_ISO_Set_Margin_Right: number;
export const KEY_Iabovedot: number;
export const KEY_Iacute: number;
export const KEY_Ibelowdot: number;
export const KEY_Ibreve: number;
export const KEY_Icircumflex: number;
export const KEY_Idiaeresis: number;
export const KEY_Igrave: number;
export const KEY_Ihook: number;
export const KEY_Imacron: number;
export const KEY_Insert: number;
export const KEY_Iogonek: number;
export const KEY_Itilde: number;
export const KEY_J: number;
export const KEY_Jcircumflex: number;
export const KEY_K: number;
export const KEY_KP_0: number;
export const KEY_KP_1: number;
export const KEY_KP_2: number;
export const KEY_KP_3: number;
export const KEY_KP_4: number;
export const KEY_KP_5: number;
export const KEY_KP_6: number;
export const KEY_KP_7: number;
export const KEY_KP_8: number;
export const KEY_KP_9: number;
export const KEY_KP_Add: number;
export const KEY_KP_Begin: number;
export const KEY_KP_Decimal: number;
export const KEY_KP_Delete: number;
export const KEY_KP_Divide: number;
export const KEY_KP_Down: number;
export const KEY_KP_End: number;
export const KEY_KP_Enter: number;
export const KEY_KP_Equal: number;
export const KEY_KP_F1: number;
export const KEY_KP_F2: number;
export const KEY_KP_F3: number;
export const KEY_KP_F4: number;
export const KEY_KP_Home: number;
export const KEY_KP_Insert: number;
export const KEY_KP_Left: number;
export const KEY_KP_Multiply: number;
export const KEY_KP_Next: number;
export const KEY_KP_Page_Down: number;
export const KEY_KP_Page_Up: number;
export const KEY_KP_Prior: number;
export const KEY_KP_Right: number;
export const KEY_KP_Separator: number;
export const KEY_KP_Space: number;
export const KEY_KP_Subtract: number;
export const KEY_KP_Tab: number;
export const KEY_KP_Up: number;
export const KEY_Kana_Lock: number;
export const KEY_Kana_Shift: number;
export const KEY_Kanji: number;
export const KEY_Kanji_Bangou: number;
export const KEY_Katakana: number;
export const KEY_KbdBrightnessDown: number;
export const KEY_KbdBrightnessUp: number;
export const KEY_KbdLightOnOff: number;
export const KEY_Kcedilla: number;
export const KEY_Korean_Won: number;
export const KEY_L: number;
export const KEY_L1: number;
export const KEY_L10: number;
export const KEY_L2: number;
export const KEY_L3: number;
export const KEY_L4: number;
export const KEY_L5: number;
export const KEY_L6: number;
export const KEY_L7: number;
export const KEY_L8: number;
export const KEY_L9: number;
export const KEY_Lacute: number;
export const KEY_Last_Virtual_Screen: number;
export const KEY_Launch0: number;
export const KEY_Launch1: number;
export const KEY_Launch2: number;
export const KEY_Launch3: number;
export const KEY_Launch4: number;
export const KEY_Launch5: number;
export const KEY_Launch6: number;
export const KEY_Launch7: number;
export const KEY_Launch8: number;
export const KEY_Launch9: number;
export const KEY_LaunchA: number;
export const KEY_LaunchB: number;
export const KEY_LaunchC: number;
export const KEY_LaunchD: number;
export const KEY_LaunchE: number;
export const KEY_LaunchF: number;
export const KEY_Lbelowdot: number;
export const KEY_Lcaron: number;
export const KEY_Lcedilla: number;
export const KEY_Left: number;
export const KEY_LightBulb: number;
export const KEY_Linefeed: number;
export const KEY_LiraSign: number;
export const KEY_LogGrabInfo: number;
export const KEY_LogOff: number;
export const KEY_LogWindowTree: number;
export const KEY_Lstroke: number;
export const KEY_M: number;
export const KEY_Mabovedot: number;
export const KEY_Macedonia_DSE: number;
export const KEY_Macedonia_GJE: number;
export const KEY_Macedonia_KJE: number;
export const KEY_Macedonia_dse: number;
export const KEY_Macedonia_gje: number;
export const KEY_Macedonia_kje: number;
export const KEY_Mae_Koho: number;
export const KEY_Mail: number;
export const KEY_MailForward: number;
export const KEY_Market: number;
export const KEY_Massyo: number;
export const KEY_Meeting: number;
export const KEY_Memo: number;
export const KEY_Menu: number;
export const KEY_MenuKB: number;
export const KEY_MenuPB: number;
export const KEY_Messenger: number;
export const KEY_Meta_L: number;
export const KEY_Meta_R: number;
export const KEY_MillSign: number;
export const KEY_ModeLock: number;
export const KEY_Mode_switch: number;
export const KEY_MonBrightnessDown: number;
export const KEY_MonBrightnessUp: number;
export const KEY_MouseKeys_Accel_Enable: number;
export const KEY_MouseKeys_Enable: number;
export const KEY_Muhenkan: number;
export const KEY_Multi_key: number;
export const KEY_MultipleCandidate: number;
export const KEY_Music: number;
export const KEY_MyComputer: number;
export const KEY_MySites: number;
export const KEY_N: number;
export const KEY_Nacute: number;
export const KEY_NairaSign: number;
export const KEY_Ncaron: number;
export const KEY_Ncedilla: number;
export const KEY_New: number;
export const KEY_NewSheqelSign: number;
export const KEY_News: number;
export const KEY_Next: number;
export const KEY_Next_VMode: number;
export const KEY_Next_Virtual_Screen: number;
export const KEY_Ntilde: number;
export const KEY_Num_Lock: number;
export const KEY_O: number;
export const KEY_OE: number;
export const KEY_Oacute: number;
export const KEY_Obarred: number;
export const KEY_Obelowdot: number;
export const KEY_Ocaron: number;
export const KEY_Ocircumflex: number;
export const KEY_Ocircumflexacute: number;
export const KEY_Ocircumflexbelowdot: number;
export const KEY_Ocircumflexgrave: number;
export const KEY_Ocircumflexhook: number;
export const KEY_Ocircumflextilde: number;
export const KEY_Odiaeresis: number;
export const KEY_Odoubleacute: number;
export const KEY_OfficeHome: number;
export const KEY_Ograve: number;
export const KEY_Ohook: number;
export const KEY_Ohorn: number;
export const KEY_Ohornacute: number;
export const KEY_Ohornbelowdot: number;
export const KEY_Ohorngrave: number;
export const KEY_Ohornhook: number;
export const KEY_Ohorntilde: number;
export const KEY_Omacron: number;
export const KEY_Ooblique: number;
export const KEY_Open: number;
export const KEY_OpenURL: number;
export const KEY_Option: number;
export const KEY_Oslash: number;
export const KEY_Otilde: number;
export const KEY_Overlay1_Enable: number;
export const KEY_Overlay2_Enable: number;
export const KEY_P: number;
export const KEY_Pabovedot: number;
export const KEY_Page_Down: number;
export const KEY_Page_Up: number;
export const KEY_Paste: number;
export const KEY_Pause: number;
export const KEY_PesetaSign: number;
export const KEY_Phone: number;
export const KEY_Pictures: number;
export const KEY_Pointer_Accelerate: number;
export const KEY_Pointer_Button1: number;
export const KEY_Pointer_Button2: number;
export const KEY_Pointer_Button3: number;
export const KEY_Pointer_Button4: number;
export const KEY_Pointer_Button5: number;
export const KEY_Pointer_Button_Dflt: number;
export const KEY_Pointer_DblClick1: number;
export const KEY_Pointer_DblClick2: number;
export const KEY_Pointer_DblClick3: number;
export const KEY_Pointer_DblClick4: number;
export const KEY_Pointer_DblClick5: number;
export const KEY_Pointer_DblClick_Dflt: number;
export const KEY_Pointer_DfltBtnNext: number;
export const KEY_Pointer_DfltBtnPrev: number;
export const KEY_Pointer_Down: number;
export const KEY_Pointer_DownLeft: number;
export const KEY_Pointer_DownRight: number;
export const KEY_Pointer_Drag1: number;
export const KEY_Pointer_Drag2: number;
export const KEY_Pointer_Drag3: number;
export const KEY_Pointer_Drag4: number;
export const KEY_Pointer_Drag5: number;
export const KEY_Pointer_Drag_Dflt: number;
export const KEY_Pointer_EnableKeys: number;
export const KEY_Pointer_Left: number;
export const KEY_Pointer_Right: number;
export const KEY_Pointer_Up: number;
export const KEY_Pointer_UpLeft: number;
export const KEY_Pointer_UpRight: number;
export const KEY_PowerDown: number;
export const KEY_PowerOff: number;
export const KEY_Prev_VMode: number;
export const KEY_Prev_Virtual_Screen: number;
export const KEY_PreviousCandidate: number;
export const KEY_Print: number;
export const KEY_Prior: number;
export const KEY_Q: number;
export const KEY_R: number;
export const KEY_R1: number;
export const KEY_R10: number;
export const KEY_R11: number;
export const KEY_R12: number;
export const KEY_R13: number;
export const KEY_R14: number;
export const KEY_R15: number;
export const KEY_R2: number;
export const KEY_R3: number;
export const KEY_R4: number;
export const KEY_R5: number;
export const KEY_R6: number;
export const KEY_R7: number;
export const KEY_R8: number;
export const KEY_R9: number;
export const KEY_Racute: number;
export const KEY_Rcaron: number;
export const KEY_Rcedilla: number;
export const KEY_Red: number;
export const KEY_Redo: number;
export const KEY_Refresh: number;
export const KEY_Reload: number;
export const KEY_RepeatKeys_Enable: number;
export const KEY_Reply: number;
export const KEY_Return: number;
export const KEY_Right: number;
export const KEY_RockerDown: number;
export const KEY_RockerEnter: number;
export const KEY_RockerUp: number;
export const KEY_Romaji: number;
export const KEY_RotateWindows: number;
export const KEY_RotationKB: number;
export const KEY_RotationPB: number;
export const KEY_RupeeSign: number;
export const KEY_S: number;
export const KEY_SCHWA: number;
export const KEY_Sabovedot: number;
export const KEY_Sacute: number;
export const KEY_Save: number;
export const KEY_Scaron: number;
export const KEY_Scedilla: number;
export const KEY_Scircumflex: number;
export const KEY_ScreenSaver: number;
export const KEY_ScrollClick: number;
export const KEY_ScrollDown: number;
export const KEY_ScrollUp: number;
export const KEY_Scroll_Lock: number;
export const KEY_Search: number;
export const KEY_Select: number;
export const KEY_SelectButton: number;
export const KEY_Send: number;
export const KEY_Serbian_DJE: number;
export const KEY_Serbian_DZE: number;
export const KEY_Serbian_JE: number;
export const KEY_Serbian_LJE: number;
export const KEY_Serbian_NJE: number;
export const KEY_Serbian_TSHE: number;
export const KEY_Serbian_dje: number;
export const KEY_Serbian_dze: number;
export const KEY_Serbian_je: number;
export const KEY_Serbian_lje: number;
export const KEY_Serbian_nje: number;
export const KEY_Serbian_tshe: number;
export const KEY_Shift_L: number;
export const KEY_Shift_Lock: number;
export const KEY_Shift_R: number;
export const KEY_Shop: number;
export const KEY_SingleCandidate: number;
export const KEY_Sinh_a: number;
export const KEY_Sinh_aa: number;
export const KEY_Sinh_aa2: number;
export const KEY_Sinh_ae: number;
export const KEY_Sinh_ae2: number;
export const KEY_Sinh_aee: number;
export const KEY_Sinh_aee2: number;
export const KEY_Sinh_ai: number;
export const KEY_Sinh_ai2: number;
export const KEY_Sinh_al: number;
export const KEY_Sinh_au: number;
export const KEY_Sinh_au2: number;
export const KEY_Sinh_ba: number;
export const KEY_Sinh_bha: number;
export const KEY_Sinh_ca: number;
export const KEY_Sinh_cha: number;
export const KEY_Sinh_dda: number;
export const KEY_Sinh_ddha: number;
export const KEY_Sinh_dha: number;
export const KEY_Sinh_dhha: number;
export const KEY_Sinh_e: number;
export const KEY_Sinh_e2: number;
export const KEY_Sinh_ee: number;
export const KEY_Sinh_ee2: number;
export const KEY_Sinh_fa: number;
export const KEY_Sinh_ga: number;
export const KEY_Sinh_gha: number;
export const KEY_Sinh_h2: number;
export const KEY_Sinh_ha: number;
export const KEY_Sinh_i: number;
export const KEY_Sinh_i2: number;
export const KEY_Sinh_ii: number;
export const KEY_Sinh_ii2: number;
export const KEY_Sinh_ja: number;
export const KEY_Sinh_jha: number;
export const KEY_Sinh_jnya: number;
export const KEY_Sinh_ka: number;
export const KEY_Sinh_kha: number;
export const KEY_Sinh_kunddaliya: number;
export const KEY_Sinh_la: number;
export const KEY_Sinh_lla: number;
export const KEY_Sinh_lu: number;
export const KEY_Sinh_lu2: number;
export const KEY_Sinh_luu: number;
export const KEY_Sinh_luu2: number;
export const KEY_Sinh_ma: number;
export const KEY_Sinh_mba: number;
export const KEY_Sinh_na: number;
export const KEY_Sinh_ndda: number;
export const KEY_Sinh_ndha: number;
export const KEY_Sinh_ng: number;
export const KEY_Sinh_ng2: number;
export const KEY_Sinh_nga: number;
export const KEY_Sinh_nja: number;
export const KEY_Sinh_nna: number;
export const KEY_Sinh_nya: number;
export const KEY_Sinh_o: number;
export const KEY_Sinh_o2: number;
export const KEY_Sinh_oo: number;
export const KEY_Sinh_oo2: number;
export const KEY_Sinh_pa: number;
export const KEY_Sinh_pha: number;
export const KEY_Sinh_ra: number;
export const KEY_Sinh_ri: number;
export const KEY_Sinh_rii: number;
export const KEY_Sinh_ru2: number;
export const KEY_Sinh_ruu2: number;
export const KEY_Sinh_sa: number;
export const KEY_Sinh_sha: number;
export const KEY_Sinh_ssha: number;
export const KEY_Sinh_tha: number;
export const KEY_Sinh_thha: number;
export const KEY_Sinh_tta: number;
export const KEY_Sinh_ttha: number;
export const KEY_Sinh_u: number;
export const KEY_Sinh_u2: number;
export const KEY_Sinh_uu: number;
export const KEY_Sinh_uu2: number;
export const KEY_Sinh_va: number;
export const KEY_Sinh_ya: number;
export const KEY_Sleep: number;
export const KEY_SlowKeys_Enable: number;
export const KEY_Spell: number;
export const KEY_SplitScreen: number;
export const KEY_Standby: number;
export const KEY_Start: number;
export const KEY_StickyKeys_Enable: number;
export const KEY_Stop: number;
export const KEY_Subtitle: number;
export const KEY_Super_L: number;
export const KEY_Super_R: number;
export const KEY_Support: number;
export const KEY_Suspend: number;
export const KEY_Switch_VT_1: number;
export const KEY_Switch_VT_10: number;
export const KEY_Switch_VT_11: number;
export const KEY_Switch_VT_12: number;
export const KEY_Switch_VT_2: number;
export const KEY_Switch_VT_3: number;
export const KEY_Switch_VT_4: number;
export const KEY_Switch_VT_5: number;
export const KEY_Switch_VT_6: number;
export const KEY_Switch_VT_7: number;
export const KEY_Switch_VT_8: number;
export const KEY_Switch_VT_9: number;
export const KEY_Sys_Req: number;
export const KEY_T: number;
export const KEY_THORN: number;
export const KEY_Tab: number;
export const KEY_Tabovedot: number;
export const KEY_TaskPane: number;
export const KEY_Tcaron: number;
export const KEY_Tcedilla: number;
export const KEY_Terminal: number;
export const KEY_Terminate_Server: number;
export const KEY_Thai_baht: number;
export const KEY_Thai_bobaimai: number;
export const KEY_Thai_chochan: number;
export const KEY_Thai_chochang: number;
export const KEY_Thai_choching: number;
export const KEY_Thai_chochoe: number;
export const KEY_Thai_dochada: number;
export const KEY_Thai_dodek: number;
export const KEY_Thai_fofa: number;
export const KEY_Thai_fofan: number;
export const KEY_Thai_hohip: number;
export const KEY_Thai_honokhuk: number;
export const KEY_Thai_khokhai: number;
export const KEY_Thai_khokhon: number;
export const KEY_Thai_khokhuat: number;
export const KEY_Thai_khokhwai: number;
export const KEY_Thai_khorakhang: number;
export const KEY_Thai_kokai: number;
export const KEY_Thai_lakkhangyao: number;
export const KEY_Thai_lekchet: number;
export const KEY_Thai_lekha: number;
export const KEY_Thai_lekhok: number;
export const KEY_Thai_lekkao: number;
export const KEY_Thai_leknung: number;
export const KEY_Thai_lekpaet: number;
export const KEY_Thai_leksam: number;
export const KEY_Thai_leksi: number;
export const KEY_Thai_leksong: number;
export const KEY_Thai_leksun: number;
export const KEY_Thai_lochula: number;
export const KEY_Thai_loling: number;
export const KEY_Thai_lu: number;
export const KEY_Thai_maichattawa: number;
export const KEY_Thai_maiek: number;
export const KEY_Thai_maihanakat: number;
export const KEY_Thai_maihanakat_maitho: number;
export const KEY_Thai_maitaikhu: number;
export const KEY_Thai_maitho: number;
export const KEY_Thai_maitri: number;
export const KEY_Thai_maiyamok: number;
export const KEY_Thai_moma: number;
export const KEY_Thai_ngongu: number;
export const KEY_Thai_nikhahit: number;
export const KEY_Thai_nonen: number;
export const KEY_Thai_nonu: number;
export const KEY_Thai_oang: number;
export const KEY_Thai_paiyannoi: number;
export const KEY_Thai_phinthu: number;
export const KEY_Thai_phophan: number;
export const KEY_Thai_phophung: number;
export const KEY_Thai_phosamphao: number;
export const KEY_Thai_popla: number;
export const KEY_Thai_rorua: number;
export const KEY_Thai_ru: number;
export const KEY_Thai_saraa: number;
export const KEY_Thai_saraaa: number;
export const KEY_Thai_saraae: number;
export const KEY_Thai_saraaimaimalai: number;
export const KEY_Thai_saraaimaimuan: number;
export const KEY_Thai_saraam: number;
export const KEY_Thai_sarae: number;
export const KEY_Thai_sarai: number;
export const KEY_Thai_saraii: number;
export const KEY_Thai_sarao: number;
export const KEY_Thai_sarau: number;
export const KEY_Thai_saraue: number;
export const KEY_Thai_sarauee: number;
export const KEY_Thai_sarauu: number;
export const KEY_Thai_sorusi: number;
export const KEY_Thai_sosala: number;
export const KEY_Thai_soso: number;
export const KEY_Thai_sosua: number;
export const KEY_Thai_thanthakhat: number;
export const KEY_Thai_thonangmontho: number;
export const KEY_Thai_thophuthao: number;
export const KEY_Thai_thothahan: number;
export const KEY_Thai_thothan: number;
export const KEY_Thai_thothong: number;
export const KEY_Thai_thothung: number;
export const KEY_Thai_topatak: number;
export const KEY_Thai_totao: number;
export const KEY_Thai_wowaen: number;
export const KEY_Thai_yoyak: number;
export const KEY_Thai_yoying: number;
export const KEY_Thorn: number;
export const KEY_Time: number;
export const KEY_ToDoList: number;
export const KEY_Tools: number;
export const KEY_TopMenu: number;
export const KEY_TouchpadOff: number;
export const KEY_TouchpadOn: number;
export const KEY_TouchpadToggle: number;
export const KEY_Touroku: number;
export const KEY_Travel: number;
export const KEY_Tslash: number;
export const KEY_U: number;
export const KEY_UWB: number;
export const KEY_Uacute: number;
export const KEY_Ubelowdot: number;
export const KEY_Ubreve: number;
export const KEY_Ucircumflex: number;
export const KEY_Udiaeresis: number;
export const KEY_Udoubleacute: number;
export const KEY_Ugrave: number;
export const KEY_Uhook: number;
export const KEY_Uhorn: number;
export const KEY_Uhornacute: number;
export const KEY_Uhornbelowdot: number;
export const KEY_Uhorngrave: number;
export const KEY_Uhornhook: number;
export const KEY_Uhorntilde: number;
export const KEY_Ukrainian_GHE_WITH_UPTURN: number;
export const KEY_Ukrainian_I: number;
export const KEY_Ukrainian_IE: number;
export const KEY_Ukrainian_YI: number;
export const KEY_Ukrainian_ghe_with_upturn: number;
export const KEY_Ukrainian_i: number;
export const KEY_Ukrainian_ie: number;
export const KEY_Ukrainian_yi: number;
export const KEY_Ukranian_I: number;
export const KEY_Ukranian_JE: number;
export const KEY_Ukranian_YI: number;
export const KEY_Ukranian_i: number;
export const KEY_Ukranian_je: number;
export const KEY_Ukranian_yi: number;
export const KEY_Umacron: number;
export const KEY_Undo: number;
export const KEY_Ungrab: number;
export const KEY_Uogonek: number;
export const KEY_Up: number;
export const KEY_Uring: number;
export const KEY_User1KB: number;
export const KEY_User2KB: number;
export const KEY_UserPB: number;
export const KEY_Utilde: number;
export const KEY_V: number;
export const KEY_VendorHome: number;
export const KEY_Video: number;
export const KEY_View: number;
export const KEY_VoidSymbol: number;
export const KEY_W: number;
export const KEY_WLAN: number;
export const KEY_WWW: number;
export const KEY_Wacute: number;
export const KEY_WakeUp: number;
export const KEY_Wcircumflex: number;
export const KEY_Wdiaeresis: number;
export const KEY_WebCam: number;
export const KEY_Wgrave: number;
export const KEY_WheelButton: number;
export const KEY_WindowClear: number;
export const KEY_WonSign: number;
export const KEY_Word: number;
export const KEY_X: number;
export const KEY_Xabovedot: number;
export const KEY_Xfer: number;
export const KEY_Y: number;
export const KEY_Yacute: number;
export const KEY_Ybelowdot: number;
export const KEY_Ycircumflex: number;
export const KEY_Ydiaeresis: number;
export const KEY_Yellow: number;
export const KEY_Ygrave: number;
export const KEY_Yhook: number;
export const KEY_Ytilde: number;
export const KEY_Z: number;
export const KEY_Zabovedot: number;
export const KEY_Zacute: number;
export const KEY_Zcaron: number;
export const KEY_Zen_Koho: number;
export const KEY_Zenkaku: number;
export const KEY_Zenkaku_Hankaku: number;
export const KEY_ZoomIn: number;
export const KEY_ZoomOut: number;
export const KEY_Zstroke: number;
export const KEY_a: number;
export const KEY_aacute: number;
export const KEY_abelowdot: number;
export const KEY_abovedot: number;
export const KEY_abreve: number;
export const KEY_abreveacute: number;
export const KEY_abrevebelowdot: number;
export const KEY_abrevegrave: number;
export const KEY_abrevehook: number;
export const KEY_abrevetilde: number;
export const KEY_acircumflex: number;
export const KEY_acircumflexacute: number;
export const KEY_acircumflexbelowdot: number;
export const KEY_acircumflexgrave: number;
export const KEY_acircumflexhook: number;
export const KEY_acircumflextilde: number;
export const KEY_acute: number;
export const KEY_adiaeresis: number;
export const KEY_ae: number;
export const KEY_agrave: number;
export const KEY_ahook: number;
export const KEY_amacron: number;
export const KEY_ampersand: number;
export const KEY_aogonek: number;
export const KEY_apostrophe: number;
export const KEY_approxeq: number;
export const KEY_approximate: number;
export const KEY_aring: number;
export const KEY_asciicircum: number;
export const KEY_asciitilde: number;
export const KEY_asterisk: number;
export const KEY_at: number;
export const KEY_atilde: number;
export const KEY_b: number;
export const KEY_babovedot: number;
export const KEY_backslash: number;
export const KEY_ballotcross: number;
export const KEY_bar: number;
export const KEY_because: number;
export const KEY_blank: number;
export const KEY_botintegral: number;
export const KEY_botleftparens: number;
export const KEY_botleftsqbracket: number;
export const KEY_botleftsummation: number;
export const KEY_botrightparens: number;
export const KEY_botrightsqbracket: number;
export const KEY_botrightsummation: number;
export const KEY_bott: number;
export const KEY_botvertsummationconnector: number;
export const KEY_braceleft: number;
export const KEY_braceright: number;
export const KEY_bracketleft: number;
export const KEY_bracketright: number;
export const KEY_braille_blank: number;
export const KEY_braille_dot_1: number;
export const KEY_braille_dot_10: number;
export const KEY_braille_dot_2: number;
export const KEY_braille_dot_3: number;
export const KEY_braille_dot_4: number;
export const KEY_braille_dot_5: number;
export const KEY_braille_dot_6: number;
export const KEY_braille_dot_7: number;
export const KEY_braille_dot_8: number;
export const KEY_braille_dot_9: number;
export const KEY_braille_dots_1: number;
export const KEY_braille_dots_12: number;
export const KEY_braille_dots_123: number;
export const KEY_braille_dots_1234: number;
export const KEY_braille_dots_12345: number;
export const KEY_braille_dots_123456: number;
export const KEY_braille_dots_1234567: number;
export const KEY_braille_dots_12345678: number;
export const KEY_braille_dots_1234568: number;
export const KEY_braille_dots_123457: number;
export const KEY_braille_dots_1234578: number;
export const KEY_braille_dots_123458: number;
export const KEY_braille_dots_12346: number;
export const KEY_braille_dots_123467: number;
export const KEY_braille_dots_1234678: number;
export const KEY_braille_dots_123468: number;
export const KEY_braille_dots_12347: number;
export const KEY_braille_dots_123478: number;
export const KEY_braille_dots_12348: number;
export const KEY_braille_dots_1235: number;
export const KEY_braille_dots_12356: number;
export const KEY_braille_dots_123567: number;
export const KEY_braille_dots_1235678: number;
export const KEY_braille_dots_123568: number;
export const KEY_braille_dots_12357: number;
export const KEY_braille_dots_123578: number;
export const KEY_braille_dots_12358: number;
export const KEY_braille_dots_1236: number;
export const KEY_braille_dots_12367: number;
export const KEY_braille_dots_123678: number;
export const KEY_braille_dots_12368: number;
export const KEY_braille_dots_1237: number;
export const KEY_braille_dots_12378: number;
export const KEY_braille_dots_1238: number;
export const KEY_braille_dots_124: number;
export const KEY_braille_dots_1245: number;
export const KEY_braille_dots_12456: number;
export const KEY_braille_dots_124567: number;
export const KEY_braille_dots_1245678: number;
export const KEY_braille_dots_124568: number;
export const KEY_braille_dots_12457: number;
export const KEY_braille_dots_124578: number;
export const KEY_braille_dots_12458: number;
export const KEY_braille_dots_1246: number;
export const KEY_braille_dots_12467: number;
export const KEY_braille_dots_124678: number;
export const KEY_braille_dots_12468: number;
export const KEY_braille_dots_1247: number;
export const KEY_braille_dots_12478: number;
export const KEY_braille_dots_1248: number;
export const KEY_braille_dots_125: number;
export const KEY_braille_dots_1256: number;
export const KEY_braille_dots_12567: number;
export const KEY_braille_dots_125678: number;
export const KEY_braille_dots_12568: number;
export const KEY_braille_dots_1257: number;
export const KEY_braille_dots_12578: number;
export const KEY_braille_dots_1258: number;
export const KEY_braille_dots_126: number;
export const KEY_braille_dots_1267: number;
export const KEY_braille_dots_12678: number;
export const KEY_braille_dots_1268: number;
export const KEY_braille_dots_127: number;
export const KEY_braille_dots_1278: number;
export const KEY_braille_dots_128: number;
export const KEY_braille_dots_13: number;
export const KEY_braille_dots_134: number;
export const KEY_braille_dots_1345: number;
export const KEY_braille_dots_13456: number;
export const KEY_braille_dots_134567: number;
export const KEY_braille_dots_1345678: number;
export const KEY_braille_dots_134568: number;
export const KEY_braille_dots_13457: number;
export const KEY_braille_dots_134578: number;
export const KEY_braille_dots_13458: number;
export const KEY_braille_dots_1346: number;
export const KEY_braille_dots_13467: number;
export const KEY_braille_dots_134678: number;
export const KEY_braille_dots_13468: number;
export const KEY_braille_dots_1347: number;
export const KEY_braille_dots_13478: number;
export const KEY_braille_dots_1348: number;
export const KEY_braille_dots_135: number;
export const KEY_braille_dots_1356: number;
export const KEY_braille_dots_13567: number;
export const KEY_braille_dots_135678: number;
export const KEY_braille_dots_13568: number;
export const KEY_braille_dots_1357: number;
export const KEY_braille_dots_13578: number;
export const KEY_braille_dots_1358: number;
export const KEY_braille_dots_136: number;
export const KEY_braille_dots_1367: number;
export const KEY_braille_dots_13678: number;
export const KEY_braille_dots_1368: number;
export const KEY_braille_dots_137: number;
export const KEY_braille_dots_1378: number;
export const KEY_braille_dots_138: number;
export const KEY_braille_dots_14: number;
export const KEY_braille_dots_145: number;
export const KEY_braille_dots_1456: number;
export const KEY_braille_dots_14567: number;
export const KEY_braille_dots_145678: number;
export const KEY_braille_dots_14568: number;
export const KEY_braille_dots_1457: number;
export const KEY_braille_dots_14578: number;
export const KEY_braille_dots_1458: number;
export const KEY_braille_dots_146: number;
export const KEY_braille_dots_1467: number;
export const KEY_braille_dots_14678: number;
export const KEY_braille_dots_1468: number;
export const KEY_braille_dots_147: number;
export const KEY_braille_dots_1478: number;
export const KEY_braille_dots_148: number;
export const KEY_braille_dots_15: number;
export const KEY_braille_dots_156: number;
export const KEY_braille_dots_1567: number;
export const KEY_braille_dots_15678: number;
export const KEY_braille_dots_1568: number;
export const KEY_braille_dots_157: number;
export const KEY_braille_dots_1578: number;
export const KEY_braille_dots_158: number;
export const KEY_braille_dots_16: number;
export const KEY_braille_dots_167: number;
export const KEY_braille_dots_1678: number;
export const KEY_braille_dots_168: number;
export const KEY_braille_dots_17: number;
export const KEY_braille_dots_178: number;
export const KEY_braille_dots_18: number;
export const KEY_braille_dots_2: number;
export const KEY_braille_dots_23: number;
export const KEY_braille_dots_234: number;
export const KEY_braille_dots_2345: number;
export const KEY_braille_dots_23456: number;
export const KEY_braille_dots_234567: number;
export const KEY_braille_dots_2345678: number;
export const KEY_braille_dots_234568: number;
export const KEY_braille_dots_23457: number;
export const KEY_braille_dots_234578: number;
export const KEY_braille_dots_23458: number;
export const KEY_braille_dots_2346: number;
export const KEY_braille_dots_23467: number;
export const KEY_braille_dots_234678: number;
export const KEY_braille_dots_23468: number;
export const KEY_braille_dots_2347: number;
export const KEY_braille_dots_23478: number;
export const KEY_braille_dots_2348: number;
export const KEY_braille_dots_235: number;
export const KEY_braille_dots_2356: number;
export const KEY_braille_dots_23567: number;
export const KEY_braille_dots_235678: number;
export const KEY_braille_dots_23568: number;
export const KEY_braille_dots_2357: number;
export const KEY_braille_dots_23578: number;
export const KEY_braille_dots_2358: number;
export const KEY_braille_dots_236: number;
export const KEY_braille_dots_2367: number;
export const KEY_braille_dots_23678: number;
export const KEY_braille_dots_2368: number;
export const KEY_braille_dots_237: number;
export const KEY_braille_dots_2378: number;
export const KEY_braille_dots_238: number;
export const KEY_braille_dots_24: number;
export const KEY_braille_dots_245: number;
export const KEY_braille_dots_2456: number;
export const KEY_braille_dots_24567: number;
export const KEY_braille_dots_245678: number;
export const KEY_braille_dots_24568: number;
export const KEY_braille_dots_2457: number;
export const KEY_braille_dots_24578: number;
export const KEY_braille_dots_2458: number;
export const KEY_braille_dots_246: number;
export const KEY_braille_dots_2467: number;
export const KEY_braille_dots_24678: number;
export const KEY_braille_dots_2468: number;
export const KEY_braille_dots_247: number;
export const KEY_braille_dots_2478: number;
export const KEY_braille_dots_248: number;
export const KEY_braille_dots_25: number;
export const KEY_braille_dots_256: number;
export const KEY_braille_dots_2567: number;
export const KEY_braille_dots_25678: number;
export const KEY_braille_dots_2568: number;
export const KEY_braille_dots_257: number;
export const KEY_braille_dots_2578: number;
export const KEY_braille_dots_258: number;
export const KEY_braille_dots_26: number;
export const KEY_braille_dots_267: number;
export const KEY_braille_dots_2678: number;
export const KEY_braille_dots_268: number;
export const KEY_braille_dots_27: number;
export const KEY_braille_dots_278: number;
export const KEY_braille_dots_28: number;
export const KEY_braille_dots_3: number;
export const KEY_braille_dots_34: number;
export const KEY_braille_dots_345: number;
export const KEY_braille_dots_3456: number;
export const KEY_braille_dots_34567: number;
export const KEY_braille_dots_345678: number;
export const KEY_braille_dots_34568: number;
export const KEY_braille_dots_3457: number;
export const KEY_braille_dots_34578: number;
export const KEY_braille_dots_3458: number;
export const KEY_braille_dots_346: number;
export const KEY_braille_dots_3467: number;
export const KEY_braille_dots_34678: number;
export const KEY_braille_dots_3468: number;
export const KEY_braille_dots_347: number;
export const KEY_braille_dots_3478: number;
export const KEY_braille_dots_348: number;
export const KEY_braille_dots_35: number;
export const KEY_braille_dots_356: number;
export const KEY_braille_dots_3567: number;
export const KEY_braille_dots_35678: number;
export const KEY_braille_dots_3568: number;
export const KEY_braille_dots_357: number;
export const KEY_braille_dots_3578: number;
export const KEY_braille_dots_358: number;
export const KEY_braille_dots_36: number;
export const KEY_braille_dots_367: number;
export const KEY_braille_dots_3678: number;
export const KEY_braille_dots_368: number;
export const KEY_braille_dots_37: number;
export const KEY_braille_dots_378: number;
export const KEY_braille_dots_38: number;
export const KEY_braille_dots_4: number;
export const KEY_braille_dots_45: number;
export const KEY_braille_dots_456: number;
export const KEY_braille_dots_4567: number;
export const KEY_braille_dots_45678: number;
export const KEY_braille_dots_4568: number;
export const KEY_braille_dots_457: number;
export const KEY_braille_dots_4578: number;
export const KEY_braille_dots_458: number;
export const KEY_braille_dots_46: number;
export const KEY_braille_dots_467: number;
export const KEY_braille_dots_4678: number;
export const KEY_braille_dots_468: number;
export const KEY_braille_dots_47: number;
export const KEY_braille_dots_478: number;
export const KEY_braille_dots_48: number;
export const KEY_braille_dots_5: number;
export const KEY_braille_dots_56: number;
export const KEY_braille_dots_567: number;
export const KEY_braille_dots_5678: number;
export const KEY_braille_dots_568: number;
export const KEY_braille_dots_57: number;
export const KEY_braille_dots_578: number;
export const KEY_braille_dots_58: number;
export const KEY_braille_dots_6: number;
export const KEY_braille_dots_67: number;
export const KEY_braille_dots_678: number;
export const KEY_braille_dots_68: number;
export const KEY_braille_dots_7: number;
export const KEY_braille_dots_78: number;
export const KEY_braille_dots_8: number;
export const KEY_breve: number;
export const KEY_brokenbar: number;
export const KEY_c: number;
export const KEY_c_h: number;
export const KEY_cabovedot: number;
export const KEY_cacute: number;
export const KEY_careof: number;
export const KEY_caret: number;
export const KEY_caron: number;
export const KEY_ccaron: number;
export const KEY_ccedilla: number;
export const KEY_ccircumflex: number;
export const KEY_cedilla: number;
export const KEY_cent: number;
export const KEY_ch: number;
export const KEY_checkerboard: number;
export const KEY_checkmark: number;
export const KEY_circle: number;
export const KEY_club: number;
export const KEY_colon: number;
export const KEY_comma: number;
export const KEY_containsas: number;
export const KEY_copyright: number;
export const KEY_cr: number;
export const KEY_crossinglines: number;
export const KEY_cuberoot: number;
export const KEY_currency: number;
export const KEY_cursor: number;
export const KEY_d: number;
export const KEY_dabovedot: number;
export const KEY_dagger: number;
export const KEY_dcaron: number;
export const KEY_dead_A: number;
export const KEY_dead_E: number;
export const KEY_dead_I: number;
export const KEY_dead_O: number;
export const KEY_dead_U: number;
export const KEY_dead_a: number;
export const KEY_dead_abovecomma: number;
export const KEY_dead_abovedot: number;
export const KEY_dead_abovereversedcomma: number;
export const KEY_dead_abovering: number;
export const KEY_dead_aboveverticalline: number;
export const KEY_dead_acute: number;
export const KEY_dead_belowbreve: number;
export const KEY_dead_belowcircumflex: number;
export const KEY_dead_belowcomma: number;
export const KEY_dead_belowdiaeresis: number;
export const KEY_dead_belowdot: number;
export const KEY_dead_belowmacron: number;
export const KEY_dead_belowring: number;
export const KEY_dead_belowtilde: number;
export const KEY_dead_belowverticalline: number;
export const KEY_dead_breve: number;
export const KEY_dead_capital_schwa: number;
export const KEY_dead_caron: number;
export const KEY_dead_cedilla: number;
export const KEY_dead_circumflex: number;
export const KEY_dead_currency: number;
export const KEY_dead_dasia: number;
export const KEY_dead_diaeresis: number;
export const KEY_dead_doubleacute: number;
export const KEY_dead_doublegrave: number;
export const KEY_dead_e: number;
export const KEY_dead_grave: number;
export const KEY_dead_greek: number;
export const KEY_dead_hook: number;
export const KEY_dead_horn: number;
export const KEY_dead_i: number;
export const KEY_dead_invertedbreve: number;
export const KEY_dead_iota: number;
export const KEY_dead_longsolidusoverlay: number;
export const KEY_dead_lowline: number;
export const KEY_dead_macron: number;
export const KEY_dead_o: number;
export const KEY_dead_ogonek: number;
export const KEY_dead_perispomeni: number;
export const KEY_dead_psili: number;
export const KEY_dead_semivoiced_sound: number;
export const KEY_dead_small_schwa: number;
export const KEY_dead_stroke: number;
export const KEY_dead_tilde: number;
export const KEY_dead_u: number;
export const KEY_dead_voiced_sound: number;
export const KEY_decimalpoint: number;
export const KEY_degree: number;
export const KEY_diaeresis: number;
export const KEY_diamond: number;
export const KEY_digitspace: number;
export const KEY_dintegral: number;
export const KEY_division: number;
export const KEY_dollar: number;
export const KEY_doubbaselinedot: number;
export const KEY_doubleacute: number;
export const KEY_doubledagger: number;
export const KEY_doublelowquotemark: number;
export const KEY_downarrow: number;
export const KEY_downcaret: number;
export const KEY_downshoe: number;
export const KEY_downstile: number;
export const KEY_downtack: number;
export const KEY_dstroke: number;
export const KEY_e: number;
export const KEY_eabovedot: number;
export const KEY_eacute: number;
export const KEY_ebelowdot: number;
export const KEY_ecaron: number;
export const KEY_ecircumflex: number;
export const KEY_ecircumflexacute: number;
export const KEY_ecircumflexbelowdot: number;
export const KEY_ecircumflexgrave: number;
export const KEY_ecircumflexhook: number;
export const KEY_ecircumflextilde: number;
export const KEY_ediaeresis: number;
export const KEY_egrave: number;
export const KEY_ehook: number;
export const KEY_eightsubscript: number;
export const KEY_eightsuperior: number;
export const KEY_elementof: number;
export const KEY_ellipsis: number;
export const KEY_em3space: number;
export const KEY_em4space: number;
export const KEY_emacron: number;
export const KEY_emdash: number;
export const KEY_emfilledcircle: number;
export const KEY_emfilledrect: number;
export const KEY_emopencircle: number;
export const KEY_emopenrectangle: number;
export const KEY_emptyset: number;
export const KEY_emspace: number;
export const KEY_endash: number;
export const KEY_enfilledcircbullet: number;
export const KEY_enfilledsqbullet: number;
export const KEY_eng: number;
export const KEY_enopencircbullet: number;
export const KEY_enopensquarebullet: number;
export const KEY_enspace: number;
export const KEY_eogonek: number;
export const KEY_equal: number;
export const KEY_eth: number;
export const KEY_etilde: number;
export const KEY_exclam: number;
export const KEY_exclamdown: number;
export const KEY_ezh: number;
export const KEY_f: number;
export const KEY_fabovedot: number;
export const KEY_femalesymbol: number;
export const KEY_ff: number;
export const KEY_figdash: number;
export const KEY_filledlefttribullet: number;
export const KEY_filledrectbullet: number;
export const KEY_filledrighttribullet: number;
export const KEY_filledtribulletdown: number;
export const KEY_filledtribulletup: number;
export const KEY_fiveeighths: number;
export const KEY_fivesixths: number;
export const KEY_fivesubscript: number;
export const KEY_fivesuperior: number;
export const KEY_fourfifths: number;
export const KEY_foursubscript: number;
export const KEY_foursuperior: number;
export const KEY_fourthroot: number;
export const KEY_function: number;
export const KEY_g: number;
export const KEY_gabovedot: number;
export const KEY_gbreve: number;
export const KEY_gcaron: number;
export const KEY_gcedilla: number;
export const KEY_gcircumflex: number;
export const KEY_grave: number;
export const KEY_greater: number;
export const KEY_greaterthanequal: number;
export const KEY_guillemotleft: number;
export const KEY_guillemotright: number;
export const KEY_h: number;
export const KEY_hairspace: number;
export const KEY_hcircumflex: number;
export const KEY_heart: number;
export const KEY_hebrew_aleph: number;
export const KEY_hebrew_ayin: number;
export const KEY_hebrew_bet: number;
export const KEY_hebrew_beth: number;
export const KEY_hebrew_chet: number;
export const KEY_hebrew_dalet: number;
export const KEY_hebrew_daleth: number;
export const KEY_hebrew_doublelowline: number;
export const KEY_hebrew_finalkaph: number;
export const KEY_hebrew_finalmem: number;
export const KEY_hebrew_finalnun: number;
export const KEY_hebrew_finalpe: number;
export const KEY_hebrew_finalzade: number;
export const KEY_hebrew_finalzadi: number;
export const KEY_hebrew_gimel: number;
export const KEY_hebrew_gimmel: number;
export const KEY_hebrew_he: number;
export const KEY_hebrew_het: number;
export const KEY_hebrew_kaph: number;
export const KEY_hebrew_kuf: number;
export const KEY_hebrew_lamed: number;
export const KEY_hebrew_mem: number;
export const KEY_hebrew_nun: number;
export const KEY_hebrew_pe: number;
export const KEY_hebrew_qoph: number;
export const KEY_hebrew_resh: number;
export const KEY_hebrew_samech: number;
export const KEY_hebrew_samekh: number;
export const KEY_hebrew_shin: number;
export const KEY_hebrew_taf: number;
export const KEY_hebrew_taw: number;
export const KEY_hebrew_tet: number;
export const KEY_hebrew_teth: number;
export const KEY_hebrew_waw: number;
export const KEY_hebrew_yod: number;
export const KEY_hebrew_zade: number;
export const KEY_hebrew_zadi: number;
export const KEY_hebrew_zain: number;
export const KEY_hebrew_zayin: number;
export const KEY_hexagram: number;
export const KEY_horizconnector: number;
export const KEY_horizlinescan1: number;
export const KEY_horizlinescan3: number;
export const KEY_horizlinescan5: number;
export const KEY_horizlinescan7: number;
export const KEY_horizlinescan9: number;
export const KEY_hstroke: number;
export const KEY_ht: number;
export const KEY_hyphen: number;
export const KEY_i: number;
export const KEY_iTouch: number;
export const KEY_iacute: number;
export const KEY_ibelowdot: number;
export const KEY_ibreve: number;
export const KEY_icircumflex: number;
export const KEY_identical: number;
export const KEY_idiaeresis: number;
export const KEY_idotless: number;
export const KEY_ifonlyif: number;
export const KEY_igrave: number;
export const KEY_ihook: number;
export const KEY_imacron: number;
export const KEY_implies: number;
export const KEY_includedin: number;
export const KEY_includes: number;
export const KEY_infinity: number;
export const KEY_integral: number;
export const KEY_intersection: number;
export const KEY_iogonek: number;
export const KEY_itilde: number;
export const KEY_j: number;
export const KEY_jcircumflex: number;
export const KEY_jot: number;
export const KEY_k: number;
export const KEY_kana_A: number;
export const KEY_kana_CHI: number;
export const KEY_kana_E: number;
export const KEY_kana_FU: number;
export const KEY_kana_HA: number;
export const KEY_kana_HE: number;
export const KEY_kana_HI: number;
export const KEY_kana_HO: number;
export const KEY_kana_HU: number;
export const KEY_kana_I: number;
export const KEY_kana_KA: number;
export const KEY_kana_KE: number;
export const KEY_kana_KI: number;
export const KEY_kana_KO: number;
export const KEY_kana_KU: number;
export const KEY_kana_MA: number;
export const KEY_kana_ME: number;
export const KEY_kana_MI: number;
export const KEY_kana_MO: number;
export const KEY_kana_MU: number;
export const KEY_kana_N: number;
export const KEY_kana_NA: number;
export const KEY_kana_NE: number;
export const KEY_kana_NI: number;
export const KEY_kana_NO: number;
export const KEY_kana_NU: number;
export const KEY_kana_O: number;
export const KEY_kana_RA: number;
export const KEY_kana_RE: number;
export const KEY_kana_RI: number;
export const KEY_kana_RO: number;
export const KEY_kana_RU: number;
export const KEY_kana_SA: number;
export const KEY_kana_SE: number;
export const KEY_kana_SHI: number;
export const KEY_kana_SO: number;
export const KEY_kana_SU: number;
export const KEY_kana_TA: number;
export const KEY_kana_TE: number;
export const KEY_kana_TI: number;
export const KEY_kana_TO: number;
export const KEY_kana_TSU: number;
export const KEY_kana_TU: number;
export const KEY_kana_U: number;
export const KEY_kana_WA: number;
export const KEY_kana_WO: number;
export const KEY_kana_YA: number;
export const KEY_kana_YO: number;
export const KEY_kana_YU: number;
export const KEY_kana_a: number;
export const KEY_kana_closingbracket: number;
export const KEY_kana_comma: number;
export const KEY_kana_conjunctive: number;
export const KEY_kana_e: number;
export const KEY_kana_fullstop: number;
export const KEY_kana_i: number;
export const KEY_kana_middledot: number;
export const KEY_kana_o: number;
export const KEY_kana_openingbracket: number;
export const KEY_kana_switch: number;
export const KEY_kana_tsu: number;
export const KEY_kana_tu: number;
export const KEY_kana_u: number;
export const KEY_kana_ya: number;
export const KEY_kana_yo: number;
export const KEY_kana_yu: number;
export const KEY_kappa: number;
export const KEY_kcedilla: number;
export const KEY_kra: number;
export const KEY_l: number;
export const KEY_lacute: number;
export const KEY_latincross: number;
export const KEY_lbelowdot: number;
export const KEY_lcaron: number;
export const KEY_lcedilla: number;
export const KEY_leftanglebracket: number;
export const KEY_leftarrow: number;
export const KEY_leftcaret: number;
export const KEY_leftdoublequotemark: number;
export const KEY_leftmiddlecurlybrace: number;
export const KEY_leftopentriangle: number;
export const KEY_leftpointer: number;
export const KEY_leftradical: number;
export const KEY_leftshoe: number;
export const KEY_leftsinglequotemark: number;
export const KEY_leftt: number;
export const KEY_lefttack: number;
export const KEY_less: number;
export const KEY_lessthanequal: number;
export const KEY_lf: number;
export const KEY_logicaland: number;
export const KEY_logicalor: number;
export const KEY_lowleftcorner: number;
export const KEY_lowrightcorner: number;
export const KEY_lstroke: number;
export const KEY_m: number;
export const KEY_mabovedot: number;
export const KEY_macron: number;
export const KEY_malesymbol: number;
export const KEY_maltesecross: number;
export const KEY_marker: number;
export const KEY_masculine: number;
export const KEY_minus: number;
export const KEY_minutes: number;
export const KEY_mu: number;
export const KEY_multiply: number;
export const KEY_musicalflat: number;
export const KEY_musicalsharp: number;
export const KEY_n: number;
export const KEY_nabla: number;
export const KEY_nacute: number;
export const KEY_ncaron: number;
export const KEY_ncedilla: number;
export const KEY_ninesubscript: number;
export const KEY_ninesuperior: number;
export const KEY_nl: number;
export const KEY_nobreakspace: number;
export const KEY_notapproxeq: number;
export const KEY_notelementof: number;
export const KEY_notequal: number;
export const KEY_notidentical: number;
export const KEY_notsign: number;
export const KEY_ntilde: number;
export const KEY_numbersign: number;
export const KEY_numerosign: number;
export const KEY_o: number;
export const KEY_oacute: number;
export const KEY_obarred: number;
export const KEY_obelowdot: number;
export const KEY_ocaron: number;
export const KEY_ocircumflex: number;
export const KEY_ocircumflexacute: number;
export const KEY_ocircumflexbelowdot: number;
export const KEY_ocircumflexgrave: number;
export const KEY_ocircumflexhook: number;
export const KEY_ocircumflextilde: number;
export const KEY_odiaeresis: number;
export const KEY_odoubleacute: number;
export const KEY_oe: number;
export const KEY_ogonek: number;
export const KEY_ograve: number;
export const KEY_ohook: number;
export const KEY_ohorn: number;
export const KEY_ohornacute: number;
export const KEY_ohornbelowdot: number;
export const KEY_ohorngrave: number;
export const KEY_ohornhook: number;
export const KEY_ohorntilde: number;
export const KEY_omacron: number;
export const KEY_oneeighth: number;
export const KEY_onefifth: number;
export const KEY_onehalf: number;
export const KEY_onequarter: number;
export const KEY_onesixth: number;
export const KEY_onesubscript: number;
export const KEY_onesuperior: number;
export const KEY_onethird: number;
export const KEY_ooblique: number;
export const KEY_openrectbullet: number;
export const KEY_openstar: number;
export const KEY_opentribulletdown: number;
export const KEY_opentribulletup: number;
export const KEY_ordfeminine: number;
export const KEY_oslash: number;
export const KEY_otilde: number;
export const KEY_overbar: number;
export const KEY_overline: number;
export const KEY_p: number;
export const KEY_pabovedot: number;
export const KEY_paragraph: number;
export const KEY_parenleft: number;
export const KEY_parenright: number;
export const KEY_partdifferential: number;
export const KEY_partialderivative: number;
export const KEY_percent: number;
export const KEY_period: number;
export const KEY_periodcentered: number;
export const KEY_permille: number;
export const KEY_phonographcopyright: number;
export const KEY_plus: number;
export const KEY_plusminus: number;
export const KEY_prescription: number;
export const KEY_prolongedsound: number;
export const KEY_punctspace: number;
export const KEY_q: number;
export const KEY_quad: number;
export const KEY_question: number;
export const KEY_questiondown: number;
export const KEY_quotedbl: number;
export const KEY_quoteleft: number;
export const KEY_quoteright: number;
export const KEY_r: number;
export const KEY_racute: number;
export const KEY_radical: number;
export const KEY_rcaron: number;
export const KEY_rcedilla: number;
export const KEY_registered: number;
export const KEY_rightanglebracket: number;
export const KEY_rightarrow: number;
export const KEY_rightcaret: number;
export const KEY_rightdoublequotemark: number;
export const KEY_rightmiddlecurlybrace: number;
export const KEY_rightmiddlesummation: number;
export const KEY_rightopentriangle: number;
export const KEY_rightpointer: number;
export const KEY_rightshoe: number;
export const KEY_rightsinglequotemark: number;
export const KEY_rightt: number;
export const KEY_righttack: number;
export const KEY_s: number;
export const KEY_sabovedot: number;
export const KEY_sacute: number;
export const KEY_scaron: number;
export const KEY_scedilla: number;
export const KEY_schwa: number;
export const KEY_scircumflex: number;
export const KEY_script_switch: number;
export const KEY_seconds: number;
export const KEY_section: number;
export const KEY_semicolon: number;
export const KEY_semivoicedsound: number;
export const KEY_seveneighths: number;
export const KEY_sevensubscript: number;
export const KEY_sevensuperior: number;
export const KEY_signaturemark: number;
export const KEY_signifblank: number;
export const KEY_similarequal: number;
export const KEY_singlelowquotemark: number;
export const KEY_sixsubscript: number;
export const KEY_sixsuperior: number;
export const KEY_slash: number;
export const KEY_soliddiamond: number;
export const KEY_space: number;
export const KEY_squareroot: number;
export const KEY_ssharp: number;
export const KEY_sterling: number;
export const KEY_stricteq: number;
export const KEY_t: number;
export const KEY_tabovedot: number;
export const KEY_tcaron: number;
export const KEY_tcedilla: number;
export const KEY_telephone: number;
export const KEY_telephonerecorder: number;
export const KEY_therefore: number;
export const KEY_thinspace: number;
export const KEY_thorn: number;
export const KEY_threeeighths: number;
export const KEY_threefifths: number;
export const KEY_threequarters: number;
export const KEY_threesubscript: number;
export const KEY_threesuperior: number;
export const KEY_tintegral: number;
export const KEY_topintegral: number;
export const KEY_topleftparens: number;
export const KEY_topleftradical: number;
export const KEY_topleftsqbracket: number;
export const KEY_topleftsummation: number;
export const KEY_toprightparens: number;
export const KEY_toprightsqbracket: number;
export const KEY_toprightsummation: number;
export const KEY_topt: number;
export const KEY_topvertsummationconnector: number;
export const KEY_trademark: number;
export const KEY_trademarkincircle: number;
export const KEY_tslash: number;
export const KEY_twofifths: number;
export const KEY_twosubscript: number;
export const KEY_twosuperior: number;
export const KEY_twothirds: number;
export const KEY_u: number;
export const KEY_uacute: number;
export const KEY_ubelowdot: number;
export const KEY_ubreve: number;
export const KEY_ucircumflex: number;
export const KEY_udiaeresis: number;
export const KEY_udoubleacute: number;
export const KEY_ugrave: number;
export const KEY_uhook: number;
export const KEY_uhorn: number;
export const KEY_uhornacute: number;
export const KEY_uhornbelowdot: number;
export const KEY_uhorngrave: number;
export const KEY_uhornhook: number;
export const KEY_uhorntilde: number;
export const KEY_umacron: number;
export const KEY_underbar: number;
export const KEY_underscore: number;
export const KEY_union: number;
export const KEY_uogonek: number;
export const KEY_uparrow: number;
export const KEY_upcaret: number;
export const KEY_upleftcorner: number;
export const KEY_uprightcorner: number;
export const KEY_upshoe: number;
export const KEY_upstile: number;
export const KEY_uptack: number;
export const KEY_uring: number;
export const KEY_utilde: number;
export const KEY_v: number;
export const KEY_variation: number;
export const KEY_vertbar: number;
export const KEY_vertconnector: number;
export const KEY_voicedsound: number;
export const KEY_vt: number;
export const KEY_w: number;
export const KEY_wacute: number;
export const KEY_wcircumflex: number;
export const KEY_wdiaeresis: number;
export const KEY_wgrave: number;
export const KEY_x: number;
export const KEY_xabovedot: number;
export const KEY_y: number;
export const KEY_yacute: number;
export const KEY_ybelowdot: number;
export const KEY_ycircumflex: number;
export const KEY_ydiaeresis: number;
export const KEY_yen: number;
export const KEY_ygrave: number;
export const KEY_yhook: number;
export const KEY_ytilde: number;
export const KEY_z: number;
export const KEY_zabovedot: number;
export const KEY_zacute: number;
export const KEY_zcaron: number;
export const KEY_zerosubscript: number;
export const KEY_zerosuperior: number;
export const KEY_zstroke: number;
export const NO_FPU: number;
export const PATH_RELATIVE: number;
export const PRIORITY_REDRAW: number;
export const STAGE_TYPE: string;
export const WINDOWING_EGL: string;
export const WINDOWING_GLX: string;
export const WINDOWING_X11: string;
export function actor_box_alloc(): ActorBox;
export function base_init(): void;
export function cairo_clear(cr: cairo.Context): void;
export function cairo_set_source_color(cr: cairo.Context, color: Color): void;
export function color_from_hls(
    hue: number,
    luminance: number,
    saturation: number
): Color;
export function color_from_pixel(pixel: number): Color;
export function color_from_string(str: string): [boolean, Color];
export function color_get_static(color: StaticColor): Color;
export function container_class_find_child_property(
    klass: GObject.Object,
    property_name: string
): GObject.ParamSpec;
export function container_class_list_child_properties(
    klass: GObject.Object
): GObject.ParamSpec[];
export function disable_accessibility(): void;
export function do_event(event: Event): void;
export function event_add_filter(
    stage: Stage | null,
    func: EventFilterFunc
): number;
export function event_get(): Event;
export function event_peek(): Event;
export function event_remove_filter(id: number): void;
export function events_pending(): boolean;
export function feature_available(feature: FeatureFlags): boolean;
export function feature_get_all(): FeatureFlags;
export function get_accessibility_enabled(): boolean;
export function get_current_event(): Event;
export function get_current_event_time(): number;
export function get_default_backend(): Backend;
export function get_default_frame_rate(): number;
export function get_default_text_direction(): TextDirection;
export function get_font_map(): Pango.FontMap;
export function get_script_id(gobject: GObject.Object): string;
export function image_error_quark(): GLib.Quark;
export function init(argv?: string[] | null): [InitError, string[] | null];
export function init_error_quark(): GLib.Quark;
export function init_with_args(
    argv?: string[] | null,
    parameter_string?: string | null,
    entries?: GLib.OptionEntry[] | null,
    translation_domain?: string | null
): [InitError, string[] | null];
export function keysym_to_unicode(keyval: number): number;
export function matrix_alloc(): Matrix;
export function matrix_free(matrix?: Matrix | null): void;
export function matrix_get_type(): GObject.GType;
export function matrix_init_from_array(
    matrix: Matrix,
    values: number[]
): Matrix;
export function matrix_init_from_matrix(a: Matrix, b: Matrix): Matrix;
export function matrix_init_identity(matrix: Matrix): Matrix;
export function script_error_quark(): GLib.Quark;
export function set_custom_backend_func(func?: any | null): void;
export function threads_add_idle(
    priority: number,
    func: GLib.SourceFunc
): number;
export function threads_add_repaint_func(func: GLib.SourceFunc): number;
export function threads_add_repaint_func_full(
    flags: RepaintFlags,
    func: GLib.SourceFunc
): number;
export function threads_add_timeout(
    priority: number,
    interval: number,
    func: GLib.SourceFunc
): number;
export function threads_remove_repaint_func(handle_id: number): void;
export function unicode_to_keysym(wc: number): number;
export function units_from_cm(cm: number): Units;
export function units_from_em(em: number): Units;
export function units_from_em_for_font(
    font_name: string | null,
    em: number
): Units;
export function units_from_mm(mm: number): Units;
export function units_from_pixels(px: number): Units;
export function units_from_pt(pt: number): Units;
export function units_from_string(str: string): [boolean, Units];
export function value_dup_paint_node(value: any): PaintNode;
export function value_get_color(value: any): Color;
export function value_get_paint_node(value: any): PaintNode;
export function value_get_shader_float(value: any): number[];
export function value_get_shader_int(value: any): number[];
export function value_get_shader_matrix(value: any): number[];
export function value_get_units(value: any): Units;
export function value_set_color(value: any, color: Color): void;
export function value_set_paint_node(value: any, node?: PaintNode | null): void;
export function value_set_shader_float(value: any, floats: number[]): void;
export function value_set_shader_int(value: any, ints: number[]): void;
export function value_set_shader_matrix(value: any, matrix: number[]): void;
export function value_set_units(value: any, units: Units): void;
export function value_take_paint_node(
    value: any,
    node?: PaintNode | null
): void;
export type ActorCreateChildFunc<A = GObject.Object> = (item: A) => Actor;
export type BindingActionFunc<A = GObject.Object> = (
    gobject: A,
    action_name: string,
    key_val: number,
    modifiers: ModifierType
) => boolean;
export type Callback = (actor: Actor) => void;
export type EmitInputDeviceEvent = (event: Event, device: InputDevice) => void;
export type EventFilterFunc = (event: Event) => boolean;
export type PathCallback = (node: PathNode) => void;
export type ProgressFunc = (
    a: any,
    b: any,
    progress: number,
    retval: any
) => boolean;
export type ScriptConnectFunc<A = GObject.Object, B = GObject.Object> = (
    script: Script,
    object: A,
    signal_name: string,
    handler_name: string,
    connect_object: B,
    flags: GObject.ConnectFlags
) => void;
export type TimelineProgressFunc = (
    timeline: Timeline,
    elapsed: number,
    total: number
) => number;

export namespace ActorAlign {
    export const $gtype: GObject.GType<ActorAlign>;
}

export enum ActorAlign {
    FILL = 0,
    START = 1,
    CENTER = 2,
    END = 3,
}

export namespace AlignAxis {
    export const $gtype: GObject.GType<AlignAxis>;
}

export enum AlignAxis {
    X_AXIS = 0,
    Y_AXIS = 1,
    BOTH = 2,
}

export namespace AnimationMode {
    export const $gtype: GObject.GType<AnimationMode>;
}

export enum AnimationMode {
    CUSTOM_MODE = 0,
    LINEAR = 1,
    EASE_IN_QUAD = 2,
    EASE_OUT_QUAD = 3,
    EASE_IN_OUT_QUAD = 4,
    EASE_IN_CUBIC = 5,
    EASE_OUT_CUBIC = 6,
    EASE_IN_OUT_CUBIC = 7,
    EASE_IN_QUART = 8,
    EASE_OUT_QUART = 9,
    EASE_IN_OUT_QUART = 10,
    EASE_IN_QUINT = 11,
    EASE_OUT_QUINT = 12,
    EASE_IN_OUT_QUINT = 13,
    EASE_IN_SINE = 14,
    EASE_OUT_SINE = 15,
    EASE_IN_OUT_SINE = 16,
    EASE_IN_EXPO = 17,
    EASE_OUT_EXPO = 18,
    EASE_IN_OUT_EXPO = 19,
    EASE_IN_CIRC = 20,
    EASE_OUT_CIRC = 21,
    EASE_IN_OUT_CIRC = 22,
    EASE_IN_ELASTIC = 23,
    EASE_OUT_ELASTIC = 24,
    EASE_IN_OUT_ELASTIC = 25,
    EASE_IN_BACK = 26,
    EASE_OUT_BACK = 27,
    EASE_IN_OUT_BACK = 28,
    EASE_IN_BOUNCE = 29,
    EASE_OUT_BOUNCE = 30,
    EASE_IN_OUT_BOUNCE = 31,
    STEPS = 32,
    STEP_START = 33,
    STEP_END = 34,
    CUBIC_BEZIER = 35,
    EASE = 36,
    EASE_IN = 37,
    EASE_OUT = 38,
    EASE_IN_OUT = 39,
    ANIMATION_LAST = 40,
}

export namespace BinAlignment {
    export const $gtype: GObject.GType<BinAlignment>;
}

export enum BinAlignment {
    FIXED = 0,
    FILL = 1,
    START = 2,
    END = 3,
    CENTER = 4,
}

export namespace BindCoordinate {
    export const $gtype: GObject.GType<BindCoordinate>;
}

export enum BindCoordinate {
    X = 0,
    Y = 1,
    WIDTH = 2,
    HEIGHT = 3,
    POSITION = 4,
    SIZE = 5,
    ALL = 6,
}

export namespace BoxAlignment {
    export const $gtype: GObject.GType<BoxAlignment>;
}

export enum BoxAlignment {
    START = 0,
    END = 1,
    CENTER = 2,
}

export namespace ButtonState {
    export const $gtype: GObject.GType<ButtonState>;
}

export enum ButtonState {
    RELEASED = 0,
    PRESSED = 1,
}

export namespace ContentGravity {
    export const $gtype: GObject.GType<ContentGravity>;
}

export enum ContentGravity {
    TOP_LEFT = 0,
    TOP = 1,
    TOP_RIGHT = 2,
    LEFT = 3,
    CENTER = 4,
    RIGHT = 5,
    BOTTOM_LEFT = 6,
    BOTTOM = 7,
    BOTTOM_RIGHT = 8,
    RESIZE_FILL = 9,
    RESIZE_ASPECT = 10,
}

export namespace DragAxis {
    export const $gtype: GObject.GType<DragAxis>;
}

export enum DragAxis {
    AXIS_NONE = 0,
    X_AXIS = 1,
    Y_AXIS = 2,
}

export namespace EventType {
    export const $gtype: GObject.GType<EventType>;
}

export enum EventType {
    NOTHING = 0,
    KEY_PRESS = 1,
    KEY_RELEASE = 2,
    MOTION = 3,
    ENTER = 4,
    LEAVE = 5,
    BUTTON_PRESS = 6,
    BUTTON_RELEASE = 7,
    SCROLL = 8,
    STAGE_STATE = 9,
    DESTROY_NOTIFY = 10,
    CLIENT_MESSAGE = 11,
    TOUCH_BEGIN = 12,
    TOUCH_UPDATE = 13,
    TOUCH_END = 14,
    TOUCH_CANCEL = 15,
    TOUCHPAD_PINCH = 16,
    TOUCHPAD_SWIPE = 17,
    PROXIMITY_IN = 18,
    PROXIMITY_OUT = 19,
    PAD_BUTTON_PRESS = 20,
    PAD_BUTTON_RELEASE = 21,
    PAD_STRIP = 22,
    PAD_RING = 23,
    DEVICE_ADDED = 24,
    DEVICE_REMOVED = 25,
    IM_COMMIT = 26,
    IM_DELETE = 27,
    IM_PREEDIT = 28,
    EVENT_LAST = 29,
}

export namespace FlowOrientation {
    export const $gtype: GObject.GType<FlowOrientation>;
}

export enum FlowOrientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}

export namespace FrameResult {
    export const $gtype: GObject.GType<FrameResult>;
}

export enum FrameResult {
    PENDING_PRESENTED = 0,
    IDLE = 1,
}

export namespace GestureTriggerEdge {
    export const $gtype: GObject.GType<GestureTriggerEdge>;
}

export enum GestureTriggerEdge {
    NONE = 0,
    AFTER = 1,
    BEFORE = 2,
}

export namespace Gravity {
    export const $gtype: GObject.GType<Gravity>;
}

export enum Gravity {
    NONE = 0,
    NORTH = 1,
    NORTH_EAST = 2,
    EAST = 3,
    SOUTH_EAST = 4,
    SOUTH = 5,
    SOUTH_WEST = 6,
    WEST = 7,
    NORTH_WEST = 8,
    CENTER = 9,
}

export namespace GridPosition {
    export const $gtype: GObject.GType<GridPosition>;
}

export enum GridPosition {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3,
}

export class ImageError extends GLib.Error {
    static $gtype: GObject.GType<ImageError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ImageError);

    // Properties
    static DATA: number;

    // Members
    static quark(): GLib.Quark;
}

export class InitError extends GLib.Error {
    static $gtype: GObject.GType<InitError>;

    constructor(options: { message: string; code: number });
    constructor(copy: InitError);

    // Properties
    static SUCCESS: number;
    static ERROR_UNKNOWN: number;
    static ERROR_THREADS: number;
    static ERROR_BACKEND: number;
    static ERROR_INTERNAL: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace InputAxis {
    export const $gtype: GObject.GType<InputAxis>;
}

export enum InputAxis {
    IGNORE = 0,
    X = 1,
    Y = 2,
    PRESSURE = 3,
    XTILT = 4,
    YTILT = 5,
    WHEEL = 6,
    DISTANCE = 7,
    ROTATION = 8,
    SLIDER = 9,
    LAST = 10,
}

export namespace InputContentPurpose {
    export const $gtype: GObject.GType<InputContentPurpose>;
}

export enum InputContentPurpose {
    NORMAL = 0,
    ALPHA = 1,
    DIGITS = 2,
    NUMBER = 3,
    PHONE = 4,
    URL = 5,
    EMAIL = 6,
    NAME = 7,
    PASSWORD = 8,
    DATE = 9,
    TIME = 10,
    DATETIME = 11,
    TERMINAL = 12,
}

export namespace InputDeviceMapping {
    export const $gtype: GObject.GType<InputDeviceMapping>;
}

export enum InputDeviceMapping {
    ABSOLUTE = 0,
    RELATIVE = 1,
}

export namespace InputDevicePadSource {
    export const $gtype: GObject.GType<InputDevicePadSource>;
}

export enum InputDevicePadSource {
    UNKNOWN = 0,
    FINGER = 1,
}

export namespace InputDeviceToolType {
    export const $gtype: GObject.GType<InputDeviceToolType>;
}

export enum InputDeviceToolType {
    NONE = 0,
    PEN = 1,
    ERASER = 2,
    BRUSH = 3,
    PENCIL = 4,
    AIRBRUSH = 5,
    MOUSE = 6,
    LENS = 7,
}

export namespace InputDeviceType {
    export const $gtype: GObject.GType<InputDeviceType>;
}

export enum InputDeviceType {
    POINTER_DEVICE = 0,
    KEYBOARD_DEVICE = 1,
    EXTENSION_DEVICE = 2,
    JOYSTICK_DEVICE = 3,
    TABLET_DEVICE = 4,
    TOUCHPAD_DEVICE = 5,
    TOUCHSCREEN_DEVICE = 6,
    PEN_DEVICE = 7,
    ERASER_DEVICE = 8,
    CURSOR_DEVICE = 9,
    PAD_DEVICE = 10,
    N_DEVICE_TYPES = 11,
}

export namespace InputMode {
    export const $gtype: GObject.GType<InputMode>;
}

export enum InputMode {
    LOGICAL = 0,
    PHYSICAL = 1,
    FLOATING = 2,
}

export namespace InputPanelState {
    export const $gtype: GObject.GType<InputPanelState>;
}

export enum InputPanelState {
    OFF = 0,
    ON = 1,
    TOGGLE = 2,
}

export namespace Interpolation {
    export const $gtype: GObject.GType<Interpolation>;
}

export enum Interpolation {
    LINEAR = 0,
    CUBIC = 1,
}

export namespace KeyState {
    export const $gtype: GObject.GType<KeyState>;
}

export enum KeyState {
    RELEASED = 0,
    PRESSED = 1,
}

export namespace LongPressState {
    export const $gtype: GObject.GType<LongPressState>;
}

export enum LongPressState {
    QUERY = 0,
    ACTIVATE = 1,
    CANCEL = 2,
}

export namespace Orientation {
    export const $gtype: GObject.GType<Orientation>;
}

export enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}

export namespace PanAxis {
    export const $gtype: GObject.GType<PanAxis>;
}

export enum PanAxis {
    AXIS_NONE = 0,
    X_AXIS = 1,
    Y_AXIS = 2,
    AXIS_AUTO = 3,
}

export namespace PathNodeType {
    export const $gtype: GObject.GType<PathNodeType>;
}

export enum PathNodeType {
    MOVE_TO = 0,
    LINE_TO = 1,
    CURVE_TO = 2,
    CLOSE = 3,
    REL_MOVE_TO = 32,
    REL_LINE_TO = 33,
    REL_CURVE_TO = 34,
}

export namespace PickMode {
    export const $gtype: GObject.GType<PickMode>;
}

export enum PickMode {
    NONE = 0,
    REACTIVE = 1,
    ALL = 2,
}

export namespace PointerA11yDwellClickType {
    export const $gtype: GObject.GType<PointerA11yDwellClickType>;
}

export enum PointerA11yDwellClickType {
    NONE = 0,
    PRIMARY = 1,
    SECONDARY = 2,
    MIDDLE = 3,
    DOUBLE = 4,
    DRAG = 5,
}

export namespace PointerA11yDwellDirection {
    export const $gtype: GObject.GType<PointerA11yDwellDirection>;
}

export enum PointerA11yDwellDirection {
    NONE = 0,
    LEFT = 1,
    RIGHT = 2,
    UP = 3,
    DOWN = 4,
}

export namespace PointerA11yDwellMode {
    export const $gtype: GObject.GType<PointerA11yDwellMode>;
}

export enum PointerA11yDwellMode {
    WINDOW = 0,
    GESTURE = 1,
}

export namespace PointerA11yTimeoutType {
    export const $gtype: GObject.GType<PointerA11yTimeoutType>;
}

export enum PointerA11yTimeoutType {
    SECONDARY_CLICK = 0,
    DWELL = 1,
    GESTURE = 2,
}

export namespace RequestMode {
    export const $gtype: GObject.GType<RequestMode>;
}

export enum RequestMode {
    HEIGHT_FOR_WIDTH = 0,
    WIDTH_FOR_HEIGHT = 1,
    CONTENT_SIZE = 2,
}

export namespace RotateAxis {
    export const $gtype: GObject.GType<RotateAxis>;
}

export enum RotateAxis {
    X_AXIS = 0,
    Y_AXIS = 1,
    Z_AXIS = 2,
}

export namespace RotateDirection {
    export const $gtype: GObject.GType<RotateDirection>;
}

export enum RotateDirection {
    CW = 0,
    CCW = 1,
}

export namespace ScalingFilter {
    export const $gtype: GObject.GType<ScalingFilter>;
}

export enum ScalingFilter {
    LINEAR = 0,
    NEAREST = 1,
    TRILINEAR = 2,
}

export class ScriptError extends GLib.Error {
    static $gtype: GObject.GType<ScriptError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ScriptError);

    // Properties
    static TYPE_FUNCTION: number;
    static PROPERTY: number;
    static VALUE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ScrollDirection {
    export const $gtype: GObject.GType<ScrollDirection>;
}

export enum ScrollDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    SMOOTH = 4,
}

export namespace ScrollSource {
    export const $gtype: GObject.GType<ScrollSource>;
}

export enum ScrollSource {
    UNKNOWN = 0,
    WHEEL = 1,
    FINGER = 2,
    CONTINUOUS = 3,
}

export namespace ShaderType {
    export const $gtype: GObject.GType<ShaderType>;
}

export enum ShaderType {
    VERTEX_SHADER = 0,
    FRAGMENT_SHADER = 1,
}

export namespace SnapEdge {
    export const $gtype: GObject.GType<SnapEdge>;
}

export enum SnapEdge {
    TOP = 0,
    RIGHT = 1,
    BOTTOM = 2,
    LEFT = 3,
}

export namespace StaticColor {
    export const $gtype: GObject.GType<StaticColor>;
}

export enum StaticColor {
    WHITE = 0,
    BLACK = 1,
    RED = 2,
    DARK_RED = 3,
    GREEN = 4,
    DARK_GREEN = 5,
    BLUE = 6,
    DARK_BLUE = 7,
    CYAN = 8,
    DARK_CYAN = 9,
    MAGENTA = 10,
    DARK_MAGENTA = 11,
    YELLOW = 12,
    DARK_YELLOW = 13,
    GRAY = 14,
    DARK_GRAY = 15,
    LIGHT_GRAY = 16,
    BUTTER = 17,
    BUTTER_LIGHT = 18,
    BUTTER_DARK = 19,
    ORANGE = 20,
    ORANGE_LIGHT = 21,
    ORANGE_DARK = 22,
    CHOCOLATE = 23,
    CHOCOLATE_LIGHT = 24,
    CHOCOLATE_DARK = 25,
    CHAMELEON = 26,
    CHAMELEON_LIGHT = 27,
    CHAMELEON_DARK = 28,
    SKY_BLUE = 29,
    SKY_BLUE_LIGHT = 30,
    SKY_BLUE_DARK = 31,
    PLUM = 32,
    PLUM_LIGHT = 33,
    PLUM_DARK = 34,
    SCARLET_RED = 35,
    SCARLET_RED_LIGHT = 36,
    SCARLET_RED_DARK = 37,
    ALUMINIUM_1 = 38,
    ALUMINIUM_2 = 39,
    ALUMINIUM_3 = 40,
    ALUMINIUM_4 = 41,
    ALUMINIUM_5 = 42,
    ALUMINIUM_6 = 43,
    TRANSPARENT = 44,
}

export namespace StepMode {
    export const $gtype: GObject.GType<StepMode>;
}

export enum StepMode {
    START = 0,
    END = 1,
}

export namespace TextDirection {
    export const $gtype: GObject.GType<TextDirection>;
}

export enum TextDirection {
    DEFAULT = 0,
    LTR = 1,
    RTL = 2,
}

export namespace TextureQuality {
    export const $gtype: GObject.GType<TextureQuality>;
}

export enum TextureQuality {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
}

export namespace TimelineDirection {
    export const $gtype: GObject.GType<TimelineDirection>;
}

export enum TimelineDirection {
    FORWARD = 0,
    BACKWARD = 1,
}

export namespace TouchpadGesturePhase {
    export const $gtype: GObject.GType<TouchpadGesturePhase>;
}

export enum TouchpadGesturePhase {
    BEGIN = 0,
    UPDATE = 1,
    END = 2,
    CANCEL = 3,
}

export namespace UnitType {
    export const $gtype: GObject.GType<UnitType>;
}

export enum UnitType {
    PIXEL = 0,
    EM = 1,
    MM = 2,
    POINT = 3,
    CM = 4,
}

export namespace ZoomAxis {
    export const $gtype: GObject.GType<ZoomAxis>;
}

export enum ZoomAxis {
    X_AXIS = 0,
    Y_AXIS = 1,
    BOTH = 2,
}

export namespace ActorFlags {
    export const $gtype: GObject.GType<ActorFlags>;
}

export enum ActorFlags {
    MAPPED = 2,
    REALIZED = 4,
    REACTIVE = 8,
    VISIBLE = 16,
    NO_LAYOUT = 32,
}

export namespace ContentRepeat {
    export const $gtype: GObject.GType<ContentRepeat>;
}

export enum ContentRepeat {
    NONE = 0,
    X_AXIS = 1,
    Y_AXIS = 2,
    BOTH = 3,
}

export namespace DebugFlag {
    export const $gtype: GObject.GType<DebugFlag>;
}

export enum DebugFlag {
    MISC = 1,
    ACTOR = 2,
    TEXTURE = 4,
    EVENT = 8,
    PAINT = 16,
    PANGO = 32,
    BACKEND = 64,
    SCHEDULER = 128,
    SCRIPT = 256,
    SHADER = 512,
    MULTISTAGE = 1024,
    ANIMATION = 2048,
    LAYOUT = 4096,
    PICK = 8192,
    EVENTLOOP = 16384,
    CLIPPING = 32768,
    OOB_TRANSFORMS = 65536,
}

export namespace DrawDebugFlag {
    export const $gtype: GObject.GType<DrawDebugFlag>;
}

export enum DrawDebugFlag {
    DISABLE_SWAP_EVENTS = 1,
    DISABLE_CLIPPED_REDRAWS = 2,
    REDRAWS = 4,
    PAINT_VOLUMES = 8,
    DISABLE_CULLING = 16,
    DISABLE_OFFSCREEN_REDIRECT = 32,
    CONTINUOUS_REDRAW = 64,
    PAINT_DEFORM_TILES = 128,
    PAINT_DAMAGE_REGION = 256,
}

export namespace EffectPaintFlags {
    export const $gtype: GObject.GType<EffectPaintFlags>;
}

export enum EffectPaintFlags {
    ACTOR_DIRTY = 1,
    BYPASS_EFFECT = 2,
}

export namespace EventFlags {
    export const $gtype: GObject.GType<EventFlags>;
}

export enum EventFlags {
    NONE = 0,
    FLAG_SYNTHETIC = 1,
    FLAG_INPUT_METHOD = 2,
    FLAG_REPEATED = 4,
}

export namespace FeatureFlags {
    export const $gtype: GObject.GType<FeatureFlags>;
}

export enum FeatureFlags {
    STAGE_STATIC = 64,
    STAGE_CURSOR = 256,
    SHADERS_GLSL = 512,
    OFFSCREEN = 1024,
    STAGE_MULTIPLE = 2048,
    SWAP_EVENTS = 4096,
}

export namespace InputContentHintFlags {
    export const $gtype: GObject.GType<InputContentHintFlags>;
}

export enum InputContentHintFlags {
    COMPLETION = 1,
    SPELLCHECK = 2,
    AUTO_CAPITALIZATION = 4,
    LOWERCASE = 8,
    UPPERCASE = 16,
    TITLECASE = 32,
    HIDDEN_TEXT = 64,
    SENSITIVE_DATA = 128,
    LATIN = 256,
    MULTILINE = 512,
}

export namespace KeyboardA11yFlags {
    export const $gtype: GObject.GType<KeyboardA11yFlags>;
}

export enum KeyboardA11yFlags {
    KEYBOARD_ENABLED = 1,
    TIMEOUT_ENABLED = 2,
    MOUSE_KEYS_ENABLED = 4,
    SLOW_KEYS_ENABLED = 8,
    SLOW_KEYS_BEEP_PRESS = 16,
    SLOW_KEYS_BEEP_ACCEPT = 32,
    SLOW_KEYS_BEEP_REJECT = 64,
    BOUNCE_KEYS_ENABLED = 128,
    BOUNCE_KEYS_BEEP_REJECT = 256,
    TOGGLE_KEYS_ENABLED = 512,
    STICKY_KEYS_ENABLED = 1024,
    STICKY_KEYS_TWO_KEY_OFF = 2048,
    STICKY_KEYS_BEEP = 4096,
    FEATURE_STATE_CHANGE_BEEP = 8192,
}

export namespace ModifierType {
    export const $gtype: GObject.GType<ModifierType>;
}

export enum ModifierType {
    SHIFT_MASK = 1,
    LOCK_MASK = 2,
    CONTROL_MASK = 4,
    MOD1_MASK = 8,
    MOD2_MASK = 16,
    MOD3_MASK = 32,
    MOD4_MASK = 64,
    MOD5_MASK = 128,
    BUTTON1_MASK = 256,
    BUTTON2_MASK = 512,
    BUTTON3_MASK = 1024,
    BUTTON4_MASK = 2048,
    BUTTON5_MASK = 4096,
    MODIFIER_RESERVED_13_MASK = 8192,
    MODIFIER_RESERVED_14_MASK = 16384,
    MODIFIER_RESERVED_15_MASK = 32768,
    MODIFIER_RESERVED_16_MASK = 65536,
    MODIFIER_RESERVED_17_MASK = 131072,
    MODIFIER_RESERVED_18_MASK = 262144,
    MODIFIER_RESERVED_19_MASK = 524288,
    MODIFIER_RESERVED_20_MASK = 1048576,
    MODIFIER_RESERVED_21_MASK = 2097152,
    MODIFIER_RESERVED_22_MASK = 4194304,
    MODIFIER_RESERVED_23_MASK = 8388608,
    MODIFIER_RESERVED_24_MASK = 16777216,
    MODIFIER_RESERVED_25_MASK = 33554432,
    SUPER_MASK = 67108864,
    HYPER_MASK = 134217728,
    META_MASK = 268435456,
    MODIFIER_RESERVED_29_MASK = 536870912,
    RELEASE_MASK = 1073741824,
    MODIFIER_MASK = 1543512063,
}

export namespace OffscreenRedirect {
    export const $gtype: GObject.GType<OffscreenRedirect>;
}

export enum OffscreenRedirect {
    AUTOMATIC_FOR_OPACITY = 1,
    ALWAYS = 2,
    ON_IDLE = 4,
}

export namespace PaintFlag {
    export const $gtype: GObject.GType<PaintFlag>;
}

export enum PaintFlag {
    NONE = 0,
    NO_CURSORS = 1,
    FORCE_CURSORS = 2,
    CLEAR = 4,
}

export namespace PickDebugFlag {
    export const $gtype: GObject.GType<PickDebugFlag>;
}

export enum PickDebugFlag {
    PICKING = 1,
}

export namespace PointerA11yFlags {
    export const $gtype: GObject.GType<PointerA11yFlags>;
}

export enum PointerA11yFlags {
    SECONDARY_CLICK_ENABLED = 1,
    DWELL_ENABLED = 2,
}

export namespace RepaintFlags {
    export const $gtype: GObject.GType<RepaintFlags>;
}

export enum RepaintFlags {
    PRE_PAINT = 1,
    POST_PAINT = 2,
}

export namespace ScrollFinishFlags {
    export const $gtype: GObject.GType<ScrollFinishFlags>;
}

export enum ScrollFinishFlags {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
}

export namespace ScrollMode {
    export const $gtype: GObject.GType<ScrollMode>;
}

export enum ScrollMode {
    NONE = 0,
    HORIZONTALLY = 1,
    VERTICALLY = 2,
    BOTH = 3,
}

export namespace StageState {
    export const $gtype: GObject.GType<StageState>;
}

export enum StageState {
    ACTIVATED = 8,
}

export namespace SwipeDirection {
    export const $gtype: GObject.GType<SwipeDirection>;
}

export enum SwipeDirection {
    UP = 1,
    DOWN = 2,
    LEFT = 4,
    RIGHT = 8,
}

export namespace TextureFlags {
    export const $gtype: GObject.GType<TextureFlags>;
}

export enum TextureFlags {
    NONE = 0,
    RGB_FLAG_BGR = 2,
    RGB_FLAG_PREMULT = 4,
    YUV_FLAG_YUV2 = 8,
}

export namespace VirtualDeviceType {
    export const $gtype: GObject.GType<VirtualDeviceType>;
}

export enum VirtualDeviceType {
    NONE = 0,
    KEYBOARD = 1,
    POINTER = 2,
    TOUCHSCREEN = 4,
}
export namespace Action {
    export interface ConstructorProperties
        extends ActorMeta.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Action extends ActorMeta {
    static $gtype: GObject.GType<Action>;

    constructor(
        properties?: Partial<Action.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Action.ConstructorProperties>,
        ...args: any[]
    ): void;
}
export namespace Actor {
    export interface ConstructorProperties<A = LayoutManager, B = Content>
        extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        actions: Action;
        allocation: ActorBox;
        background_color: Color;
        backgroundColor: Color;
        background_color_set: boolean;
        backgroundColorSet: boolean;
        child_transform_set: boolean;
        childTransformSet: boolean;
        clip_rect: Graphene.Rect;
        clipRect: Graphene.Rect;
        clip_to_allocation: boolean;
        clipToAllocation: boolean;
        constraints: Constraint;
        content: B;
        content_box: ActorBox;
        contentBox: ActorBox;
        content_gravity: ContentGravity;
        contentGravity: ContentGravity;
        content_repeat: ContentRepeat;
        contentRepeat: ContentRepeat;
        effect: Effect;
        first_child: Actor;
        firstChild: Actor;
        fixed_position_set: boolean;
        fixedPositionSet: boolean;
        fixed_x: number;
        fixedX: number;
        fixed_y: number;
        fixedY: number;
        has_clip: boolean;
        hasClip: boolean;
        has_pointer: boolean;
        hasPointer: boolean;
        height: number;
        last_child: Actor;
        lastChild: Actor;
        layout_manager: A;
        layoutManager: A;
        magnification_filter: ScalingFilter;
        magnificationFilter: ScalingFilter;
        mapped: boolean;
        margin_bottom: number;
        marginBottom: number;
        margin_left: number;
        marginLeft: number;
        margin_right: number;
        marginRight: number;
        margin_top: number;
        marginTop: number;
        min_height: number;
        minHeight: number;
        min_height_set: boolean;
        minHeightSet: boolean;
        min_width: number;
        minWidth: number;
        min_width_set: boolean;
        minWidthSet: boolean;
        minification_filter: ScalingFilter;
        minificationFilter: ScalingFilter;
        name: string;
        natural_height: number;
        naturalHeight: number;
        natural_height_set: boolean;
        naturalHeightSet: boolean;
        natural_width: number;
        naturalWidth: number;
        natural_width_set: boolean;
        naturalWidthSet: boolean;
        offscreen_redirect: OffscreenRedirect;
        offscreenRedirect: OffscreenRedirect;
        opacity: number;
        pivot_point: Graphene.Point;
        pivotPoint: Graphene.Point;
        pivot_point_z: number;
        pivotPointZ: number;
        position: Graphene.Point;
        reactive: boolean;
        realized: boolean;
        request_mode: RequestMode;
        requestMode: RequestMode;
        rotation_angle_x: number;
        rotationAngleX: number;
        rotation_angle_y: number;
        rotationAngleY: number;
        rotation_angle_z: number;
        rotationAngleZ: number;
        scale_x: number;
        scaleX: number;
        scale_y: number;
        scaleY: number;
        scale_z: number;
        scaleZ: number;
        show_on_set_parent: boolean;
        showOnSetParent: boolean;
        size: Graphene.Size;
        text_direction: TextDirection;
        textDirection: TextDirection;
        transform_set: boolean;
        transformSet: boolean;
        translation_x: number;
        translationX: number;
        translation_y: number;
        translationY: number;
        translation_z: number;
        translationZ: number;
        visible: boolean;
        width: number;
        x: number;
        x_align: ActorAlign;
        xAlign: ActorAlign;
        x_expand: boolean;
        xExpand: boolean;
        y: number;
        y_align: ActorAlign;
        yAlign: ActorAlign;
        y_expand: boolean;
        yExpand: boolean;
        z_position: number;
        zPosition: number;
    }
}
export class Actor<A = LayoutManager, B = Content>
    extends GObject.InitiallyUnowned
    implements Atk.ImplementorIface, Animatable, Container<Actor>, Scriptable {
    static $gtype: GObject.GType<Actor>;

    constructor(
        properties?: Partial<Actor.ConstructorProperties<A, B>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Actor.ConstructorProperties<A, B>>,
        ...args: any[]
    ): void;

    // Properties
    actions: Action;
    allocation: ActorBox;
    background_color: Color;
    backgroundColor: Color;
    background_color_set: boolean;
    backgroundColorSet: boolean;
    child_transform_set: boolean;
    childTransformSet: boolean;
    clip_rect: Graphene.Rect;
    clipRect: Graphene.Rect;
    clip_to_allocation: boolean;
    clipToAllocation: boolean;
    constraints: Constraint;
    content: B;
    content_box: ActorBox;
    contentBox: ActorBox;
    content_gravity: ContentGravity;
    contentGravity: ContentGravity;
    content_repeat: ContentRepeat;
    contentRepeat: ContentRepeat;
    effect: Effect;
    first_child: Actor;
    firstChild: Actor;
    fixed_position_set: boolean;
    fixedPositionSet: boolean;
    fixed_x: number;
    fixedX: number;
    fixed_y: number;
    fixedY: number;
    has_clip: boolean;
    hasClip: boolean;
    has_pointer: boolean;
    hasPointer: boolean;
    height: number;
    last_child: Actor;
    lastChild: Actor;
    layout_manager: A;
    layoutManager: A;
    magnification_filter: ScalingFilter;
    magnificationFilter: ScalingFilter;
    mapped: boolean;
    margin_bottom: number;
    marginBottom: number;
    margin_left: number;
    marginLeft: number;
    margin_right: number;
    marginRight: number;
    margin_top: number;
    marginTop: number;
    min_height: number;
    minHeight: number;
    min_height_set: boolean;
    minHeightSet: boolean;
    min_width: number;
    minWidth: number;
    min_width_set: boolean;
    minWidthSet: boolean;
    minification_filter: ScalingFilter;
    minificationFilter: ScalingFilter;
    name: string;
    natural_height: number;
    naturalHeight: number;
    natural_height_set: boolean;
    naturalHeightSet: boolean;
    natural_width: number;
    naturalWidth: number;
    natural_width_set: boolean;
    naturalWidthSet: boolean;
    offscreen_redirect: OffscreenRedirect;
    offscreenRedirect: OffscreenRedirect;
    opacity: number;
    pivot_point: Graphene.Point;
    pivotPoint: Graphene.Point;
    pivot_point_z: number;
    pivotPointZ: number;
    position: Graphene.Point;
    reactive: boolean;
    realized: boolean;
    request_mode: RequestMode;
    requestMode: RequestMode;
    rotation_angle_x: number;
    rotationAngleX: number;
    rotation_angle_y: number;
    rotationAngleY: number;
    rotation_angle_z: number;
    rotationAngleZ: number;
    scale_x: number;
    scaleX: number;
    scale_y: number;
    scaleY: number;
    scale_z: number;
    scaleZ: number;
    show_on_set_parent: boolean;
    showOnSetParent: boolean;
    size: Graphene.Size;
    text_direction: TextDirection;
    textDirection: TextDirection;
    transform_set: boolean;
    transformSet: boolean;
    translation_x: number;
    translationX: number;
    translation_y: number;
    translationY: number;
    translation_z: number;
    translationZ: number;
    visible: boolean;
    width: number;
    x: number;
    x_align: ActorAlign;
    xAlign: ActorAlign;
    x_expand: boolean;
    xExpand: boolean;
    y: number;
    y_align: ActorAlign;
    yAlign: ActorAlign;
    y_expand: boolean;
    yExpand: boolean;
    z_position: number;
    zPosition: number;

    // Fields
    flags: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'button-press-event',
        callback: (_source: this, event: ButtonEvent) => boolean
    ): number;
    connect_after(
        signal: 'button-press-event',
        callback: (_source: this, event: ButtonEvent) => boolean
    ): number;
    emit(signal: 'button-press-event', event: ButtonEvent): void;
    connect(
        signal: 'button-release-event',
        callback: (_source: this, event: ButtonEvent) => boolean
    ): number;
    connect_after(
        signal: 'button-release-event',
        callback: (_source: this, event: ButtonEvent) => boolean
    ): number;
    emit(signal: 'button-release-event', event: ButtonEvent): void;
    connect(
        signal: 'captured-event',
        callback: (_source: this, event: Event) => boolean
    ): number;
    connect_after(
        signal: 'captured-event',
        callback: (_source: this, event: Event) => boolean
    ): number;
    emit(signal: 'captured-event', event: Event): void;
    connect(signal: 'destroy', callback: (_source: this) => void): number;
    connect_after(signal: 'destroy', callback: (_source: this) => void): number;
    emit(signal: 'destroy'): void;
    connect(
        signal: 'enter-event',
        callback: (_source: this, event: CrossingEvent) => boolean
    ): number;
    connect_after(
        signal: 'enter-event',
        callback: (_source: this, event: CrossingEvent) => boolean
    ): number;
    emit(signal: 'enter-event', event: CrossingEvent): void;
    connect(
        signal: 'event',
        callback: (_source: this, event: Event) => boolean
    ): number;
    connect_after(
        signal: 'event',
        callback: (_source: this, event: Event) => boolean
    ): number;
    emit(signal: 'event', event: Event): void;
    connect(signal: 'hide', callback: (_source: this) => void): number;
    connect_after(signal: 'hide', callback: (_source: this) => void): number;
    emit(signal: 'hide'): void;
    connect(signal: 'key-focus-in', callback: (_source: this) => void): number;
    connect_after(
        signal: 'key-focus-in',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'key-focus-in'): void;
    connect(signal: 'key-focus-out', callback: (_source: this) => void): number;
    connect_after(
        signal: 'key-focus-out',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'key-focus-out'): void;
    connect(
        signal: 'key-press-event',
        callback: (_source: this, event: KeyEvent) => boolean
    ): number;
    connect_after(
        signal: 'key-press-event',
        callback: (_source: this, event: KeyEvent) => boolean
    ): number;
    emit(signal: 'key-press-event', event: KeyEvent): void;
    connect(
        signal: 'key-release-event',
        callback: (_source: this, event: KeyEvent) => boolean
    ): number;
    connect_after(
        signal: 'key-release-event',
        callback: (_source: this, event: KeyEvent) => boolean
    ): number;
    emit(signal: 'key-release-event', event: KeyEvent): void;
    connect(
        signal: 'leave-event',
        callback: (_source: this, event: CrossingEvent) => boolean
    ): number;
    connect_after(
        signal: 'leave-event',
        callback: (_source: this, event: CrossingEvent) => boolean
    ): number;
    emit(signal: 'leave-event', event: CrossingEvent): void;
    connect(
        signal: 'motion-event',
        callback: (_source: this, event: MotionEvent) => boolean
    ): number;
    connect_after(
        signal: 'motion-event',
        callback: (_source: this, event: MotionEvent) => boolean
    ): number;
    emit(signal: 'motion-event', event: MotionEvent): void;
    connect(
        signal: 'paint',
        callback: (_source: this, paint_context: PaintContext) => void
    ): number;
    connect_after(
        signal: 'paint',
        callback: (_source: this, paint_context: PaintContext) => void
    ): number;
    emit(signal: 'paint', paint_context: PaintContext): void;
    connect(
        signal: 'parent-set',
        callback: (_source: this, old_parent: Actor | null) => void
    ): number;
    connect_after(
        signal: 'parent-set',
        callback: (_source: this, old_parent: Actor | null) => void
    ): number;
    emit(signal: 'parent-set', old_parent: Actor | null): void;
    connect(
        signal: 'pick',
        callback: (_source: this, pick_context: PickContext) => void
    ): number;
    connect_after(
        signal: 'pick',
        callback: (_source: this, pick_context: PickContext) => void
    ): number;
    emit(signal: 'pick', pick_context: PickContext): void;
    connect(
        signal: 'queue-redraw',
        callback: (_source: this, origin: Actor, volume: PaintVolume) => boolean
    ): number;
    connect_after(
        signal: 'queue-redraw',
        callback: (_source: this, origin: Actor, volume: PaintVolume) => boolean
    ): number;
    emit(signal: 'queue-redraw', origin: Actor, volume: PaintVolume): void;
    connect(
        signal: 'queue-relayout',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'queue-relayout',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'queue-relayout'): void;
    connect(signal: 'realize', callback: (_source: this) => void): number;
    connect_after(signal: 'realize', callback: (_source: this) => void): number;
    emit(signal: 'realize'): void;
    connect(
        signal: 'resource-scale-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'resource-scale-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'resource-scale-changed'): void;
    connect(
        signal: 'scroll-event',
        callback: (_source: this, event: ScrollEvent) => boolean
    ): number;
    connect_after(
        signal: 'scroll-event',
        callback: (_source: this, event: ScrollEvent) => boolean
    ): number;
    emit(signal: 'scroll-event', event: ScrollEvent): void;
    connect(signal: 'show', callback: (_source: this) => void): number;
    connect_after(signal: 'show', callback: (_source: this) => void): number;
    emit(signal: 'show'): void;
    connect(
        signal: 'stage-views-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'stage-views-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'stage-views-changed'): void;
    connect(
        signal: 'touch-event',
        callback: (_source: this, event: Event) => boolean
    ): number;
    connect_after(
        signal: 'touch-event',
        callback: (_source: this, event: Event) => boolean
    ): number;
    emit(signal: 'touch-event', event: Event): void;
    connect(
        signal: 'transition-stopped',
        callback: (_source: this, name: string, is_finished: boolean) => void
    ): number;
    connect_after(
        signal: 'transition-stopped',
        callback: (_source: this, name: string, is_finished: boolean) => void
    ): number;
    emit(
        signal: 'transition-stopped',
        name: string,
        is_finished: boolean
    ): void;
    connect(
        signal: 'transitions-completed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'transitions-completed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'transitions-completed'): void;
    connect(signal: 'unrealize', callback: (_source: this) => void): number;
    connect_after(
        signal: 'unrealize',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'unrealize'): void;

    // Constructors

    static ['new'](): Actor;

    // Members

    add_action(action: Action): void;
    add_action_with_name(name: string, action: Action): void;
    add_child(child: Actor): void;
    add_constraint(constraint: Constraint): void;
    add_constraint_with_name(name: string, constraint: Constraint): void;
    add_effect(effect: Effect): void;
    add_effect_with_name(name: string, effect: Effect): void;
    add_transition(name: string, transition: Transition): void;
    allocate(box: ActorBox): void;
    allocate_align_fill(
        box: ActorBox,
        x_align: number,
        y_align: number,
        x_fill: boolean,
        y_fill: boolean
    ): void;
    allocate_available_size(
        x: number,
        y: number,
        available_width: number,
        available_height: number
    ): void;
    allocate_preferred_size(x: number, y: number): void;
    apply_relative_transform_to_point(
        ancestor: Actor | null,
        point: Graphene.Point3D
    ): Graphene.Point3D;
    apply_transform_to_point(point: Graphene.Point3D): Graphene.Point3D;
    bind_model(
        model: Gio.ListModel | null,
        create_child_func: ActorCreateChildFunc
    ): void;
    clear_actions(): void;
    clear_constraints(): void;
    clear_effects(): void;
    contains(descendant: Actor): boolean;
    continue_paint(paint_context: PaintContext): void;
    continue_pick(pick_context: PickContext): void;
    create_pango_context(): Pango.Context;
    create_pango_layout(text?: string | null): Pango.Layout;
    destroy(): void;
    destroy_all_children(): void;
    event(event: Event, capture: boolean): boolean;
    get_abs_allocation_vertices(): Graphene.Point3D[];
    get_accessible(): Atk.Object;
    get_action(name: string): Action;
    get_actions(): Action[];
    get_allocation_box(): ActorBox;
    get_background_color(): Color;
    get_child_at_index(index_: number): Actor;
    get_child_transform(): Matrix;
    get_children(): Actor[];
    get_children(...args: never[]): never;
    get_clip(): [number | null, number | null, number | null, number | null];
    get_clip_to_allocation(): boolean;
    get_constraint(name: string): Constraint;
    get_constraints(): Constraint[];
    get_content(): B;
    get_content_box(): ActorBox;
    get_content_gravity(): ContentGravity;
    get_content_repeat(): ContentRepeat;
    get_content_scaling_filters(): [ScalingFilter | null, ScalingFilter | null];
    get_default_paint_volume(): PaintVolume;
    get_easing_delay(): number;
    get_easing_duration(): number;
    get_easing_mode(): AnimationMode;
    get_effect(name: string): Effect;
    get_effects(): Effect[];
    get_first_child(): Actor;
    get_fixed_position(): [boolean, number | null, number | null];
    get_fixed_position_set(): boolean;
    get_flags(): ActorFlags;
    get_height(): number;
    get_last_child(): Actor;
    get_layout_manager(): A;
    get_margin(): Margin;
    get_margin_bottom(): number;
    get_margin_left(): number;
    get_margin_right(): number;
    get_margin_top(): number;
    get_n_children(): number;
    get_name(): string;
    get_next_sibling(): Actor;
    get_offscreen_redirect(): OffscreenRedirect;
    get_opacity(): number;
    get_opacity_override(): number;
    get_paint_box(): [boolean, ActorBox];
    get_paint_opacity(): number;
    get_paint_visibility(): boolean;
    get_paint_volume(): PaintVolume;
    get_pango_context(): Pango.Context;
    get_parent(): Actor;
    get_pivot_point(): [number | null, number | null];
    get_pivot_point_z(): number;
    get_position(): [number | null, number | null];
    get_preferred_height(for_width: number): [number | null, number | null];
    get_preferred_size(): [
        number | null,
        number | null,
        number | null,
        number | null
    ];
    get_preferred_width(for_height: number): [number | null, number | null];
    get_previous_sibling(): Actor;
    get_reactive(): boolean;
    get_request_mode(): RequestMode;
    get_resource_scale(): number;
    get_rotation_angle(axis: RotateAxis): number;
    get_scale(): [number | null, number | null];
    get_scale_z(): number;
    get_size(): [number | null, number | null];
    get_stage(): Stage;
    get_text_direction(): TextDirection;
    get_transform(): Matrix;
    get_transformed_extents(): Graphene.Rect;
    get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume;
    get_transformed_position(): [number | null, number | null];
    get_transformed_size(): [number | null, number | null];
    get_transition(name: string): Transition;
    get_translation(): [number | null, number | null, number | null];
    get_width(): number;
    get_x(): number;
    get_x_align(): ActorAlign;
    get_x_expand(): boolean;
    get_y(): number;
    get_y_align(): ActorAlign;
    get_y_expand(): boolean;
    get_z_position(): number;
    grab_key_focus(): void;
    has_accessible(): boolean;
    has_actions(): boolean;
    has_allocation(): boolean;
    has_constraints(): boolean;
    has_damage(): boolean;
    has_effects(): boolean;
    has_key_focus(): boolean;
    has_mapped_clones(): boolean;
    has_overlaps(): boolean;
    hide(): void;
    inhibit_culling(): void;
    insert_child_above(child: Actor, sibling?: Actor | null): void;
    insert_child_at_index(child: Actor, index_: number): void;
    insert_child_below(child: Actor, sibling?: Actor | null): void;
    invalidate_transform(): void;
    is_effectively_on_stage_view(view: StageView): boolean;
    is_in_clone_paint(): boolean;
    is_mapped(): boolean;
    is_realized(): boolean;
    is_rotated(): boolean;
    is_scaled(): boolean;
    is_visible(): boolean;
    map(): void;
    move_by(dx: number, dy: number): void;
    needs_expand(orientation: Orientation): boolean;
    paint(paint_context: PaintContext): void;
    peek_stage_views(): StageView[];
    pick(pick_context: PickContext): void;
    pick_box(pick_context: PickContext, box: ActorBox): void;
    queue_redraw(): void;
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void;
    queue_relayout(): void;
    realize(): void;
    remove_action(action: Action): void;
    remove_action_by_name(name: string): void;
    remove_all_children(): void;
    remove_all_transitions(): void;
    remove_child(child: Actor): void;
    remove_clip(): void;
    remove_constraint(constraint: Constraint): void;
    remove_constraint_by_name(name: string): void;
    remove_effect(effect: Effect): void;
    remove_effect_by_name(name: string): void;
    remove_transition(name: string): void;
    replace_child(old_child: Actor, new_child: Actor): void;
    restore_easing_state(): void;
    save_easing_state(): void;
    set_allocation(box: ActorBox): void;
    set_background_color(color?: Color | null): void;
    set_child_above_sibling(child: Actor, sibling?: Actor | null): void;
    set_child_at_index(child: Actor, index_: number): void;
    set_child_below_sibling(child: Actor, sibling?: Actor | null): void;
    set_child_transform(transform?: Matrix | null): void;
    set_clip(xoff: number, yoff: number, width: number, height: number): void;
    set_clip_to_allocation(clip_set: boolean): void;
    set_content(content?: B | null): void;
    set_content_gravity(gravity: ContentGravity): void;
    set_content_repeat(repeat: ContentRepeat): void;
    set_content_scaling_filters(
        min_filter: ScalingFilter,
        mag_filter: ScalingFilter
    ): void;
    set_easing_delay(msecs: number): void;
    set_easing_duration(msecs: number): void;
    set_easing_mode(mode: AnimationMode): void;
    set_fixed_position_set(is_set: boolean): void;
    set_flags(flags: ActorFlags): void;
    set_height(height: number): void;
    set_layout_manager(manager?: A | null): void;
    set_margin(margin: Margin): void;
    set_margin_bottom(margin: number): void;
    set_margin_left(margin: number): void;
    set_margin_right(margin: number): void;
    set_margin_top(margin: number): void;
    set_name(name: string): void;
    set_offscreen_redirect(redirect: OffscreenRedirect): void;
    set_opacity(opacity: number): void;
    set_opacity_override(opacity: number): void;
    set_pivot_point(pivot_x: number, pivot_y: number): void;
    set_pivot_point_z(pivot_z: number): void;
    set_position(x: number, y: number): void;
    set_reactive(reactive: boolean): void;
    set_request_mode(mode: RequestMode): void;
    set_rotation_angle(axis: RotateAxis, angle: number): void;
    set_scale(scale_x: number, scale_y: number): void;
    set_scale_z(scale_z: number): void;
    set_size(width: number, height: number): void;
    set_text_direction(text_dir: TextDirection): void;
    set_transform(transform?: Matrix | null): void;
    set_translation(
        translate_x: number,
        translate_y: number,
        translate_z: number
    ): void;
    set_width(width: number): void;
    set_x(x: number): void;
    set_x_align(x_align: ActorAlign): void;
    set_x_expand(expand: boolean): void;
    set_y(y: number): void;
    set_y_align(y_align: ActorAlign): void;
    set_y_expand(expand: boolean): void;
    set_z_position(z_position: number): void;
    should_pick_paint(): boolean;
    show(): void;
    transform_stage_point(x: number, y: number): [boolean, number, number];
    uninhibit_culling(): void;
    unmap(): void;
    unrealize(): void;
    unset_flags(flags: ActorFlags): void;
    vfunc_allocate(box: ActorBox): void;
    vfunc_apply_transform(matrix: Matrix): void;
    vfunc_button_press_event(event: ButtonEvent): boolean;
    vfunc_button_release_event(event: ButtonEvent): boolean;
    vfunc_calculate_resource_scale(phase: number): number;
    vfunc_captured_event(event: Event): boolean;
    vfunc_destroy(): void;
    vfunc_enter_event(event: CrossingEvent): boolean;
    vfunc_event(event: Event): boolean;
    vfunc_get_accessible(): Atk.Object;
    vfunc_get_paint_volume(volume: PaintVolume): boolean;
    vfunc_get_preferred_height(
        for_width: number
    ): [number | null, number | null];
    vfunc_get_preferred_width(
        for_height: number
    ): [number | null, number | null];
    vfunc_has_accessible(): boolean;
    vfunc_has_overlaps(): boolean;
    vfunc_hide(): void;
    vfunc_hide_all(): void;
    vfunc_key_focus_in(): void;
    vfunc_key_focus_out(): void;
    vfunc_key_press_event(event: KeyEvent): boolean;
    vfunc_key_release_event(event: KeyEvent): boolean;
    vfunc_leave_event(event: CrossingEvent): boolean;
    vfunc_map(): void;
    vfunc_motion_event(event: MotionEvent): boolean;
    vfunc_paint(paint_context: PaintContext): void;
    vfunc_paint_node(root: PaintNode): void;
    vfunc_parent_set(old_parent: Actor): void;
    vfunc_pick(pick_context: PickContext): void;
    vfunc_queue_redraw(
        leaf_that_queued: Actor,
        paint_volume: PaintVolume
    ): boolean;
    vfunc_queue_relayout(): void;
    vfunc_realize(): void;
    vfunc_resource_scale_changed(): void;
    vfunc_scroll_event(event: ScrollEvent): boolean;
    vfunc_show(): void;
    vfunc_touch_event(event: TouchEvent): boolean;
    vfunc_unmap(): void;
    vfunc_unrealize(): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: Actor): void;
    child_get_property(child: Actor, property: string, value: any): void;
    child_notify(child: Actor, pspec: GObject.ParamSpec): void;
    child_set_property(child: Actor, property: string, value: any): void;
    create_child_meta(actor: Actor): void;
    destroy_child_meta(actor: Actor): void;
    find_child_by_name(child_name: string): Actor;
    get_child_meta(actor: Actor): ChildMeta;
    lower_child(actor: Actor, sibling?: Actor | null): void;
    raise_child(actor: Actor, sibling?: Actor | null): void;
    remove_actor(actor: Actor): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: Actor): void;
    vfunc_actor_removed(actor: Actor): void;
    vfunc_add(actor: Actor): void;
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: Actor): void;
    vfunc_destroy_child_meta(actor: Actor): void;
    vfunc_get_child_meta(actor: Actor): ChildMeta;
    vfunc_lower(actor: Actor, sibling?: Actor | null): void;
    vfunc_raise(actor: Actor, sibling?: Actor | null): void;
    vfunc_remove(actor: Actor): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace ActorMeta {
    export interface ConstructorProperties
        extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        actor: Actor;
        enabled: boolean;
        name: string;
    }
}
export abstract class ActorMeta extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<ActorMeta>;

    constructor(
        properties?: Partial<ActorMeta.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ActorMeta.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    actor: Actor;
    enabled: boolean;
    name: string;

    // Members

    get_actor(): Actor;
    get_enabled(): boolean;
    get_name(): string;
    set_enabled(is_enabled: boolean): void;
    set_name(name: string): void;
    vfunc_set_actor(actor?: Actor | null): void;
    vfunc_set_enabled(is_enabled: boolean): void;
}
export namespace ActorNode {
    export interface ConstructorProperties
        extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ActorNode extends PaintNode {
    static $gtype: GObject.GType<ActorNode>;

    constructor(
        properties?: Partial<ActorNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ActorNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](actor: Actor): ActorNode;
}
export namespace AlignConstraint {
    export interface ConstructorProperties
        extends Constraint.ConstructorProperties {
        [key: string]: any;
        align_axis: AlignAxis;
        alignAxis: AlignAxis;
        factor: number;
        pivot_point: Graphene.Point;
        pivotPoint: Graphene.Point;
        source: Actor;
    }
}
export class AlignConstraint extends Constraint {
    static $gtype: GObject.GType<AlignConstraint>;

    constructor(
        properties?: Partial<AlignConstraint.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<AlignConstraint.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    align_axis: AlignAxis;
    alignAxis: AlignAxis;
    factor: number;
    pivot_point: Graphene.Point;
    pivotPoint: Graphene.Point;
    source: Actor;

    // Constructors

    static ['new'](
        source: Actor | null,
        axis: AlignAxis,
        factor: number
    ): AlignConstraint;

    // Members

    get_align_axis(): AlignAxis;
    get_factor(): number;
    get_pivot_point(): Graphene.Point;
    get_source(): Actor;
    set_align_axis(axis: AlignAxis): void;
    set_factor(factor: number): void;
    set_pivot_point(pivot_point: Graphene.Point): void;
    set_source(source?: Actor | null): void;
}
export namespace Backend {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Backend extends GObject.Object {
    static $gtype: GObject.GType<Backend>;

    constructor(
        properties?: Partial<Backend.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Backend.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'font-changed', callback: (_source: this) => void): number;
    connect_after(
        signal: 'font-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'font-changed'): void;
    connect(
        signal: 'resolution-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'resolution-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'resolution-changed'): void;
    connect(
        signal: 'settings-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'settings-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'settings-changed'): void;

    // Members

    get_default_seat(): Seat;
    get_font_options(): cairo.FontOptions;
    get_input_method(): InputMethod;
    get_resolution(): number;
    set_font_options(options: cairo.FontOptions): void;
    set_input_method(method: InputMethod): void;
}
export namespace BinLayout {
    export interface ConstructorProperties
        extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        x_align: BinAlignment;
        xAlign: BinAlignment;
        y_align: BinAlignment;
        yAlign: BinAlignment;
    }
}
export class BinLayout extends LayoutManager {
    static $gtype: GObject.GType<BinLayout>;

    constructor(
        properties?: Partial<BinLayout.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BinLayout.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    x_align: BinAlignment;
    xAlign: BinAlignment;
    y_align: BinAlignment;
    yAlign: BinAlignment;

    // Constructors

    static ['new'](x_align: BinAlignment, y_align: BinAlignment): BinLayout;
}
export namespace BindConstraint {
    export interface ConstructorProperties
        extends Constraint.ConstructorProperties {
        [key: string]: any;
        coordinate: BindCoordinate;
        offset: number;
        source: Actor;
    }
}
export class BindConstraint extends Constraint {
    static $gtype: GObject.GType<BindConstraint>;

    constructor(
        properties?: Partial<BindConstraint.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BindConstraint.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    coordinate: BindCoordinate;
    offset: number;
    source: Actor;

    // Constructors

    static ['new'](
        source: Actor | null,
        coordinate: BindCoordinate,
        offset: number
    ): BindConstraint;

    // Members

    get_coordinate(): BindCoordinate;
    get_offset(): number;
    get_source(): Actor;
    set_coordinate(coordinate: BindCoordinate): void;
    set_offset(offset: number): void;
    set_source(source?: Actor | null): void;
}
export namespace BindingPool {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        name: string;
    }
}
export class BindingPool extends GObject.Object {
    static $gtype: GObject.GType<BindingPool>;

    constructor(
        properties?: Partial<BindingPool.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BindingPool.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    name: string;

    // Constructors

    static ['new'](name: string): BindingPool;

    // Members

    activate(
        key_val: number,
        modifiers: ModifierType,
        gobject: GObject.Object
    ): boolean;
    block_action(action_name: string): void;
    find_action(key_val: number, modifiers: ModifierType): string;
    install_action(
        action_name: string,
        key_val: number,
        modifiers: ModifierType,
        callback: BindingActionFunc
    ): void;
    install_closure(
        action_name: string,
        key_val: number,
        modifiers: ModifierType,
        closure: GObject.Closure
    ): void;
    override_action(
        key_val: number,
        modifiers: ModifierType,
        callback: GObject.Callback
    ): void;
    override_closure(
        key_val: number,
        modifiers: ModifierType,
        closure: GObject.Closure
    ): void;
    remove_action(key_val: number, modifiers: ModifierType): void;
    unblock_action(action_name: string): void;
    static find(name: string): BindingPool;
    static get_for_class(klass?: any | null): BindingPool;
}
export namespace BlurEffect {
    export interface ConstructorProperties
        extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
    }
}
export class BlurEffect extends OffscreenEffect {
    static $gtype: GObject.GType<BlurEffect>;

    constructor(
        properties?: Partial<BlurEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BlurEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): BlurEffect;
}
export namespace BoxLayout {
    export interface ConstructorProperties
        extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        homogeneous: boolean;
        orientation: Orientation;
        pack_start: boolean;
        packStart: boolean;
        spacing: number;
    }
}
export class BoxLayout extends LayoutManager {
    static $gtype: GObject.GType<BoxLayout>;

    constructor(
        properties?: Partial<BoxLayout.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BoxLayout.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    homogeneous: boolean;
    orientation: Orientation;
    pack_start: boolean;
    packStart: boolean;
    spacing: number;

    // Constructors

    static ['new'](): BoxLayout;

    // Members

    get_homogeneous(): boolean;
    get_orientation(): Orientation;
    get_pack_start(): boolean;
    get_spacing(): number;
    set_homogeneous(homogeneous: boolean): void;
    set_orientation(orientation: Orientation): void;
    set_pack_start(pack_start: boolean): void;
    set_spacing(spacing: number): void;
}
export namespace BrightnessContrastEffect {
    export interface ConstructorProperties
        extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        brightness: Color;
        contrast: Color;
    }
}
export class BrightnessContrastEffect extends OffscreenEffect {
    static $gtype: GObject.GType<BrightnessContrastEffect>;

    constructor(
        properties?: Partial<BrightnessContrastEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<BrightnessContrastEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    brightness: Color;
    contrast: Color;

    // Constructors

    static ['new'](): BrightnessContrastEffect;

    // Members

    get_brightness(): [number | null, number | null, number | null];
    get_contrast(): [number | null, number | null, number | null];
    set_brightness(brightness: number): void;
    set_brightness_full(red: number, green: number, blue: number): void;
    set_contrast(contrast: number): void;
    set_contrast_full(red: number, green: number, blue: number): void;
}
export namespace Canvas {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        height: number;
        scale_factor: number;
        scaleFactor: number;
        width: number;
    }
}
export class Canvas extends GObject.Object implements Content {
    static $gtype: GObject.GType<Canvas>;

    constructor(
        properties?: Partial<Canvas.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Canvas.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    height: number;
    scale_factor: number;
    scaleFactor: number;
    width: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'draw',
        callback: (
            _source: this,
            cr: cairo.Context,
            width: number,
            height: number
        ) => boolean
    ): number;
    connect_after(
        signal: 'draw',
        callback: (
            _source: this,
            cr: cairo.Context,
            width: number,
            height: number
        ) => boolean
    ): number;
    emit(
        signal: 'draw',
        cr: cairo.Context,
        width: number,
        height: number
    ): void;

    // Members

    get_scale_factor(): number;
    set_scale_factor(scale: number): void;
    set_size(width: number, height: number): boolean;
    vfunc_draw(cr: cairo.Context, width: number, height: number): boolean;
    static new(): Content;

    // Implemented Members

    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    invalidate_size(): void;
    vfunc_attached(actor: Actor): void;
    vfunc_detached(actor: Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_invalidate_size(): void;
    vfunc_paint_content(
        actor: Actor,
        node: PaintNode,
        paint_context: PaintContext
    ): void;
}
export namespace ChildMeta {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        actor: Actor;
        container: Container;
    }
}
export abstract class ChildMeta extends GObject.Object {
    static $gtype: GObject.GType<ChildMeta>;

    constructor(
        properties?: Partial<ChildMeta.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ChildMeta.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    actor: Actor;
    container: Container;

    // Members

    get_actor(): Actor;
    get_container(): Container;
}
export namespace ClickAction {
    export interface ConstructorProperties
        extends Action.ConstructorProperties {
        [key: string]: any;
        held: boolean;
        long_press_duration: number;
        longPressDuration: number;
        long_press_threshold: number;
        longPressThreshold: number;
        pressed: boolean;
    }
}
export class ClickAction extends Action {
    static $gtype: GObject.GType<ClickAction>;

    constructor(
        properties?: Partial<ClickAction.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ClickAction.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    held: boolean;
    long_press_duration: number;
    longPressDuration: number;
    long_press_threshold: number;
    longPressThreshold: number;
    pressed: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'clicked',
        callback: (_source: this, actor: Actor) => void
    ): number;
    connect_after(
        signal: 'clicked',
        callback: (_source: this, actor: Actor) => void
    ): number;
    emit(signal: 'clicked', actor: Actor): void;
    connect(
        signal: 'long-press',
        callback: (
            _source: this,
            actor: Actor,
            state: LongPressState
        ) => boolean
    ): number;
    connect_after(
        signal: 'long-press',
        callback: (
            _source: this,
            actor: Actor,
            state: LongPressState
        ) => boolean
    ): number;
    emit(signal: 'long-press', actor: Actor, state: LongPressState): void;

    // Constructors

    static ['new'](): ClickAction;

    // Members

    get_button(): number;
    get_coords(): [number, number];
    get_state(): ModifierType;
    release(): void;
    vfunc_clicked(actor: Actor): void;
    vfunc_long_press(actor: Actor, state: LongPressState): boolean;
}
export namespace ClipNode {
    export interface ConstructorProperties
        extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ClipNode extends PaintNode {
    static $gtype: GObject.GType<ClipNode>;

    constructor(
        properties?: Partial<ClipNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ClipNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): ClipNode;
}
export namespace Clone {
    export interface ConstructorProperties<A extends Actor = Actor>
        extends Actor.ConstructorProperties {
        [key: string]: any;
        source: A;
    }
}
export class Clone<A extends Actor = Actor>
    extends Actor
    implements Atk.ImplementorIface, Animatable, Container<A>, Scriptable {
    static $gtype: GObject.GType<Clone>;

    constructor(
        properties?: Partial<Clone.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Clone.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Properties
    source: A;

    // Constructors

    static ['new'](source: Actor): Clone;
    static ['new'](...args: never[]): never;

    // Members

    get_source(): A;
    set_source(source?: A | null): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace ColorNode {
    export interface ConstructorProperties
        extends PipelineNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ColorNode extends PipelineNode {
    static $gtype: GObject.GType<ColorNode>;

    constructor(
        properties?: Partial<ColorNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ColorNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](color?: Color | null): ColorNode;
}
export namespace ColorizeEffect {
    export interface ConstructorProperties
        extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        tint: Color;
    }
}
export class ColorizeEffect extends OffscreenEffect {
    static $gtype: GObject.GType<ColorizeEffect>;

    constructor(
        properties?: Partial<ColorizeEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ColorizeEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    tint: Color;

    // Constructors

    static ['new'](tint: Color): ColorizeEffect;

    // Members

    get_tint(): Color;
    set_tint(tint: Color): void;
}
export namespace Constraint {
    export interface ConstructorProperties
        extends ActorMeta.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Constraint extends ActorMeta {
    static $gtype: GObject.GType<Constraint>;

    constructor(
        properties?: Partial<Constraint.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Constraint.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    update_preferred_size(
        actor: Actor,
        direction: Orientation,
        for_size: number,
        minimum_size: number,
        natural_size: number
    ): [number, number];
    vfunc_update_allocation(actor: Actor, allocation: ActorBox): void;
    vfunc_update_preferred_size(
        actor: Actor,
        direction: Orientation,
        for_size: number,
        minimum_size: number,
        natural_size: number
    ): [number, number];
}
export namespace DeformEffect {
    export interface ConstructorProperties
        extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        x_tiles: number;
        xTiles: number;
        y_tiles: number;
        yTiles: number;
    }
}
export abstract class DeformEffect extends OffscreenEffect {
    static $gtype: GObject.GType<DeformEffect>;

    constructor(
        properties?: Partial<DeformEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<DeformEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    x_tiles: number;
    xTiles: number;
    y_tiles: number;
    yTiles: number;

    // Members

    get_back_material(): Cogl.Handle;
    get_n_tiles(): [number, number];
    invalidate(): void;
    set_back_material(material?: Cogl.Handle | null): void;
    set_n_tiles(x_tiles: number, y_tiles: number): void;
    vfunc_deform_vertex(
        width: number,
        height: number,
        vertex: Cogl.TextureVertex
    ): void;
}
export namespace DesaturateEffect {
    export interface ConstructorProperties
        extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        factor: number;
    }
}
export class DesaturateEffect extends OffscreenEffect {
    static $gtype: GObject.GType<DesaturateEffect>;

    constructor(
        properties?: Partial<DesaturateEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<DesaturateEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    factor: number;

    // Constructors

    static ['new'](factor: number): DesaturateEffect;

    // Members

    get_factor(): number;
    set_factor(factor: number): void;
}
export namespace Effect {
    export interface ConstructorProperties
        extends ActorMeta.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Effect extends ActorMeta {
    static $gtype: GObject.GType<Effect>;

    constructor(
        properties?: Partial<Effect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Effect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    queue_repaint(): void;
    vfunc_modify_paint_volume(volume: PaintVolume): boolean;
    vfunc_paint(paint_context: PaintContext, flags: EffectPaintFlags): void;
    vfunc_pick(pick_context: PickContext): void;
    vfunc_post_paint(paint_context: PaintContext): void;
    vfunc_pre_paint(paint_context: PaintContext): boolean;
}
export namespace FixedLayout {
    export interface ConstructorProperties
        extends LayoutManager.ConstructorProperties {
        [key: string]: any;
    }
}
export class FixedLayout extends LayoutManager {
    static $gtype: GObject.GType<FixedLayout>;

    constructor(
        properties?: Partial<FixedLayout.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<FixedLayout.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): FixedLayout;
}
export namespace FlowLayout {
    export interface ConstructorProperties
        extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        column_spacing: number;
        columnSpacing: number;
        homogeneous: boolean;
        max_column_width: number;
        maxColumnWidth: number;
        max_row_height: number;
        maxRowHeight: number;
        min_column_width: number;
        minColumnWidth: number;
        min_row_height: number;
        minRowHeight: number;
        orientation: FlowOrientation;
        row_spacing: number;
        rowSpacing: number;
        snap_to_grid: boolean;
        snapToGrid: boolean;
    }
}
export class FlowLayout extends LayoutManager {
    static $gtype: GObject.GType<FlowLayout>;

    constructor(
        properties?: Partial<FlowLayout.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<FlowLayout.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    column_spacing: number;
    columnSpacing: number;
    homogeneous: boolean;
    max_column_width: number;
    maxColumnWidth: number;
    max_row_height: number;
    maxRowHeight: number;
    min_column_width: number;
    minColumnWidth: number;
    min_row_height: number;
    minRowHeight: number;
    orientation: FlowOrientation;
    row_spacing: number;
    rowSpacing: number;
    snap_to_grid: boolean;
    snapToGrid: boolean;

    // Constructors

    static ['new'](orientation: FlowOrientation): FlowLayout;

    // Members

    get_column_spacing(): number;
    get_column_width(): [number, number];
    get_homogeneous(): boolean;
    get_orientation(): FlowOrientation;
    get_row_height(): [number, number];
    get_row_spacing(): number;
    get_snap_to_grid(): boolean;
    set_column_spacing(spacing: number): void;
    set_column_width(min_width: number, max_width: number): void;
    set_homogeneous(homogeneous: boolean): void;
    set_orientation(orientation: FlowOrientation): void;
    set_row_height(min_height: number, max_height: number): void;
    set_row_spacing(spacing: number): void;
    set_snap_to_grid(snap_to_grid: boolean): void;
}
export namespace FrameClock {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FrameClock extends GObject.Object {
    static $gtype: GObject.GType<FrameClock>;

    constructor(
        properties?: Partial<FrameClock.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<FrameClock.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'destroy', callback: (_source: this) => void): number;
    connect_after(signal: 'destroy', callback: (_source: this) => void): number;
    emit(signal: 'destroy'): void;

    // Constructors

    static ['new'](
        refresh_rate: number,
        iface: FrameListenerIface,
        user_data?: any | null
    ): FrameClock;

    // Members

    add_timeline(timeline: Timeline): void;
    destroy(): void;
    get_refresh_rate(): number;
    inhibit(): void;
    remove_timeline(timeline: Timeline): void;
    schedule_update(): void;
    schedule_update_now(): void;
    uninhibit(): void;
}
export namespace GestureAction {
    export interface ConstructorProperties
        extends Action.ConstructorProperties {
        [key: string]: any;
        n_touch_points: number;
        nTouchPoints: number;
        threshold_trigger_distance_x: number;
        thresholdTriggerDistanceX: number;
        threshold_trigger_distance_y: number;
        thresholdTriggerDistanceY: number;
        threshold_trigger_edge: GestureTriggerEdge;
        thresholdTriggerEdge: GestureTriggerEdge;
    }
}
export class GestureAction extends Action {
    static $gtype: GObject.GType<GestureAction>;

    constructor(
        properties?: Partial<GestureAction.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<GestureAction.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    n_touch_points: number;
    nTouchPoints: number;
    threshold_trigger_distance_x: number;
    thresholdTriggerDistanceX: number;
    threshold_trigger_distance_y: number;
    thresholdTriggerDistanceY: number;
    threshold_trigger_edge: GestureTriggerEdge;
    thresholdTriggerEdge: GestureTriggerEdge;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'gesture-begin',
        callback: (_source: this, actor: Actor) => boolean
    ): number;
    connect_after(
        signal: 'gesture-begin',
        callback: (_source: this, actor: Actor) => boolean
    ): number;
    emit(signal: 'gesture-begin', actor: Actor): void;
    connect(
        signal: 'gesture-cancel',
        callback: (_source: this, actor: Actor) => void
    ): number;
    connect_after(
        signal: 'gesture-cancel',
        callback: (_source: this, actor: Actor) => void
    ): number;
    emit(signal: 'gesture-cancel', actor: Actor): void;
    connect(
        signal: 'gesture-end',
        callback: (_source: this, actor: Actor) => void
    ): number;
    connect_after(
        signal: 'gesture-end',
        callback: (_source: this, actor: Actor) => void
    ): number;
    emit(signal: 'gesture-end', actor: Actor): void;
    connect(
        signal: 'gesture-progress',
        callback: (_source: this, actor: Actor) => boolean
    ): number;
    connect_after(
        signal: 'gesture-progress',
        callback: (_source: this, actor: Actor) => boolean
    ): number;
    emit(signal: 'gesture-progress', actor: Actor): void;

    // Constructors

    static ['new'](): GestureAction;

    // Members

    cancel(): void;
    get_device(point: number): InputDevice;
    get_last_event(point: number): Event;
    get_motion_coords(point: number): [number | null, number | null];
    get_motion_delta(point: number): [number, number | null, number | null];
    get_n_current_points(): number;
    get_n_touch_points(): number;
    get_press_coords(point: number): [number | null, number | null];
    get_release_coords(point: number): [number | null, number | null];
    get_sequence(point: number): EventSequence;
    get_threshold_trigger_distance(): [number | null, number | null];
    get_threshold_trigger_edge(): GestureTriggerEdge;
    get_threshold_trigger_egde(): GestureTriggerEdge;
    get_velocity(point: number): [number, number | null, number | null];
    set_n_touch_points(nb_points: number): void;
    set_threshold_trigger_distance(x: number, y: number): void;
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void;
    vfunc_gesture_begin(actor: Actor): boolean;
    vfunc_gesture_cancel(actor: Actor): void;
    vfunc_gesture_end(actor: Actor): void;
    vfunc_gesture_prepare(actor: Actor): boolean;
    vfunc_gesture_progress(actor: Actor): boolean;
}
export namespace GridLayout {
    export interface ConstructorProperties
        extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        column_homogeneous: boolean;
        columnHomogeneous: boolean;
        column_spacing: number;
        columnSpacing: number;
        orientation: Orientation;
        row_homogeneous: boolean;
        rowHomogeneous: boolean;
        row_spacing: number;
        rowSpacing: number;
    }
}
export class GridLayout extends LayoutManager {
    static $gtype: GObject.GType<GridLayout>;

    constructor(
        properties?: Partial<GridLayout.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<GridLayout.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    column_homogeneous: boolean;
    columnHomogeneous: boolean;
    column_spacing: number;
    columnSpacing: number;
    orientation: Orientation;
    row_homogeneous: boolean;
    rowHomogeneous: boolean;
    row_spacing: number;
    rowSpacing: number;

    // Constructors

    static ['new'](): GridLayout;

    // Members

    attach(
        child: Actor,
        left: number,
        top: number,
        width: number,
        height: number
    ): void;
    attach_next_to(
        child: Actor,
        sibling: Actor | null,
        side: GridPosition,
        width: number,
        height: number
    ): void;
    get_child_at(left: number, top: number): Actor;
    get_column_homogeneous(): boolean;
    get_column_spacing(): number;
    get_orientation(): Orientation;
    get_row_homogeneous(): boolean;
    get_row_spacing(): number;
    insert_column(position: number): void;
    insert_next_to(sibling: Actor, side: GridPosition): void;
    insert_row(position: number): void;
    set_column_homogeneous(homogeneous: boolean): void;
    set_column_spacing(spacing: number): void;
    set_orientation(orientation: Orientation): void;
    set_row_homogeneous(homogeneous: boolean): void;
    set_row_spacing(spacing: number): void;
}
export namespace Image {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Image extends GObject.Object implements Content {
    static $gtype: GObject.GType<Image>;

    constructor(
        properties?: Partial<Image.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Image.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    get_texture(): Cogl.Texture;
    set_area(
        data: Uint8Array | string,
        pixel_format: Cogl.PixelFormat,
        rect: cairo.RectangleInt,
        row_stride: number
    ): boolean;
    set_bytes(
        data: GLib.Bytes | Uint8Array,
        pixel_format: Cogl.PixelFormat,
        width: number,
        height: number,
        row_stride: number
    ): boolean;
    set_data(
        data: Uint8Array | string,
        pixel_format: Cogl.PixelFormat,
        width: number,
        height: number,
        row_stride: number
    ): boolean;
    set_data(...args: never[]): never;
    static new(): Content;

    // Implemented Members

    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    invalidate_size(): void;
    vfunc_attached(actor: Actor): void;
    vfunc_detached(actor: Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_invalidate_size(): void;
    vfunc_paint_content(
        actor: Actor,
        node: PaintNode,
        paint_context: PaintContext
    ): void;
}
export namespace InputDevice {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Backend;
        device_mode: InputMode;
        deviceMode: InputMode;
        device_node: string;
        deviceNode: string;
        device_type: InputDeviceType;
        deviceType: InputDeviceType;
        enabled: boolean;
        has_cursor: boolean;
        hasCursor: boolean;
        id: number;
        mapping_mode: InputDeviceMapping;
        mappingMode: InputDeviceMapping;
        n_axes: number;
        nAxes: number;
        n_mode_groups: number;
        nModeGroups: number;
        n_rings: number;
        nRings: number;
        n_strips: number;
        nStrips: number;
        name: string;
        product_id: string;
        productId: string;
        seat: Seat;
        vendor_id: string;
        vendorId: string;
    }
}
export class InputDevice extends GObject.Object {
    static $gtype: GObject.GType<InputDevice>;

    constructor(
        properties?: Partial<InputDevice.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<InputDevice.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    backend: Backend;
    device_mode: InputMode;
    deviceMode: InputMode;
    device_node: string;
    deviceNode: string;
    device_type: InputDeviceType;
    deviceType: InputDeviceType;
    enabled: boolean;
    has_cursor: boolean;
    hasCursor: boolean;
    id: number;
    mapping_mode: InputDeviceMapping;
    mappingMode: InputDeviceMapping;
    n_axes: number;
    nAxes: number;
    n_mode_groups: number;
    nModeGroups: number;
    n_rings: number;
    nRings: number;
    n_strips: number;
    nStrips: number;
    name: string;
    product_id: string;
    productId: string;
    seat: Seat;
    vendor_id: string;
    vendorId: string;

    // Members

    get_actor(sequence?: EventSequence | null): Actor;
    get_associated_device(): InputDevice;
    get_axis(index_: number): InputAxis;
    get_axis_value(axes: number[], axis: InputAxis): [boolean, number];
    get_coords(sequence: EventSequence | null): [boolean, Graphene.Point];
    get_device_id(): number;
    get_device_mode(): InputMode;
    get_device_name(): string;
    get_device_node(): string;
    get_device_type(): InputDeviceType;
    get_enabled(): boolean;
    get_grabbed_actor(): Actor;
    get_group_n_modes(group: number): number;
    get_has_cursor(): boolean;
    get_key(index_: number): [boolean, number, ModifierType];
    get_mapping_mode(): InputDeviceMapping;
    get_mode_switch_button_group(button: number): number;
    get_modifier_state(): ModifierType;
    get_n_axes(): number;
    get_n_keys(): number;
    get_n_mode_groups(): number;
    get_n_rings(): number;
    get_n_strips(): number;
    get_physical_devices(): InputDevice[];
    get_pointer_stage(): Stage;
    get_product_id(): string;
    get_seat(): Seat;
    get_vendor_id(): string;
    grab(actor: Actor): void;
    is_grouped(other_device: InputDevice): boolean;
    is_mode_switch_button(group: number, button: number): boolean;
    keycode_to_evdev(hardware_keycode: number, evdev_keycode: number): boolean;
    sequence_get_grabbed_actor(sequence: EventSequence): Actor;
    sequence_grab(sequence: EventSequence, actor: Actor): void;
    sequence_ungrab(sequence: EventSequence): void;
    set_enabled(enabled: boolean): void;
    set_key(index_: number, keyval: number, modifiers: ModifierType): void;
    set_mapping_mode(mapping: InputDeviceMapping): void;
    ungrab(): void;
    update_from_event(event: Event, update_stage: boolean): void;
    vfunc_get_group_n_modes(group: number): number;
    vfunc_is_grouped(other_device: InputDevice): boolean;
    vfunc_is_mode_switch_button(group: number, button: number): boolean;
    vfunc_keycode_to_evdev(
        hardware_keycode: number,
        evdev_keycode: number
    ): boolean;
    vfunc_update_from_tool(tool: InputDeviceTool): void;
}
export namespace InputDeviceTool {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        id: number;
        serial: number;
        type: InputDeviceToolType;
    }
}
export abstract class InputDeviceTool extends GObject.Object {
    static $gtype: GObject.GType<InputDeviceTool>;

    constructor(
        properties?: Partial<InputDeviceTool.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<InputDeviceTool.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    id: number;
    serial: number;
    type: InputDeviceToolType;

    // Members

    get_id(): number;
    get_serial(): number;
    get_tool_type(): InputDeviceToolType;
}
export namespace InputFocus {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class InputFocus extends GObject.Object {
    static $gtype: GObject.GType<InputFocus>;

    constructor(
        properties?: Partial<InputFocus.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<InputFocus.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    filter_event(event: Event): boolean;
    is_focused(): boolean;
    reset(): void;
    set_can_show_preedit(can_show_preedit: boolean): void;
    set_content_hints(hint: InputContentHintFlags): void;
    set_content_purpose(purpose: InputContentPurpose): void;
    set_cursor_location(rect: Graphene.Rect): void;
    set_input_panel_state(state: InputPanelState): void;
    set_surrounding(text: string, cursor: number, anchor: number): void;
    vfunc_commit_text(text: string): void;
    vfunc_delete_surrounding(offset: number, len: number): void;
    vfunc_focus_in(input_method: InputMethod): void;
    vfunc_focus_out(): void;
    vfunc_request_surrounding(): void;
    vfunc_set_preedit_text(preedit: string, cursor: number): void;
}
export namespace InputMethod {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        can_show_preedit: boolean;
        canShowPreedit: boolean;
        content_hints: InputContentHintFlags;
        contentHints: InputContentHintFlags;
        content_purpose: InputContentPurpose;
        contentPurpose: InputContentPurpose;
    }
}
export abstract class InputMethod extends GObject.Object {
    static $gtype: GObject.GType<InputMethod>;

    constructor(
        properties?: Partial<InputMethod.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<InputMethod.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    can_show_preedit: boolean;
    canShowPreedit: boolean;
    content_hints: InputContentHintFlags;
    contentHints: InputContentHintFlags;
    content_purpose: InputContentPurpose;
    contentPurpose: InputContentPurpose;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'commit',
        callback: (_source: this, object: string) => void
    ): number;
    connect_after(
        signal: 'commit',
        callback: (_source: this, object: string) => void
    ): number;
    emit(signal: 'commit', object: string): void;
    connect(
        signal: 'cursor-location-changed',
        callback: (_source: this, object: Graphene.Rect) => void
    ): number;
    connect_after(
        signal: 'cursor-location-changed',
        callback: (_source: this, object: Graphene.Rect) => void
    ): number;
    emit(signal: 'cursor-location-changed', object: Graphene.Rect): void;
    connect(
        signal: 'delete-surrounding',
        callback: (_source: this, object: number, p0: number) => void
    ): number;
    connect_after(
        signal: 'delete-surrounding',
        callback: (_source: this, object: number, p0: number) => void
    ): number;
    emit(signal: 'delete-surrounding', object: number, p0: number): void;
    connect(
        signal: 'input-panel-state',
        callback: (_source: this, object: InputPanelState) => void
    ): number;
    connect_after(
        signal: 'input-panel-state',
        callback: (_source: this, object: InputPanelState) => void
    ): number;
    emit(signal: 'input-panel-state', object: InputPanelState): void;
    connect(
        signal: 'request-surrounding',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'request-surrounding',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'request-surrounding'): void;

    // Members

    commit(text: string): void;
    delete_surrounding(offset: number, len: number): void;
    focus_in(focus: InputFocus): void;
    focus_out(): void;
    forward_key(
        keyval: number,
        keycode: number,
        state: number,
        time_: number,
        press: boolean
    ): void;
    notify_key_event(event: Event, filtered: boolean): void;
    request_surrounding(): void;
    set_input_panel_state(state: InputPanelState): void;
    set_preedit_text(preedit: string | null, cursor: number): void;
    vfunc_filter_key_event(key: Event): boolean;
    vfunc_focus_in(actor: InputFocus): void;
    vfunc_focus_out(): void;
    vfunc_reset(): void;
    vfunc_set_cursor_location(rect: Graphene.Rect): void;
    vfunc_set_surrounding(text: string, cursor: number, anchor: number): void;
    vfunc_update_content_hints(hint: InputContentHintFlags): void;
    vfunc_update_content_purpose(purpose: InputContentPurpose): void;
}
export namespace Interval {
    export interface ConstructorProperties
        extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        final: GObject.Value;
        initial: GObject.Value;
        value_type: GObject.GType;
        valueType: GObject.GType;
    }
}
export class Interval extends GObject.InitiallyUnowned implements Scriptable {
    static $gtype: GObject.GType<Interval>;

    constructor(
        properties?: Partial<Interval.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Interval.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    'final': GObject.Value;
    initial: GObject.Value;
    value_type: GObject.GType;
    valueType: GObject.GType;

    // Constructors

    static new_with_values(
        gtype: GObject.GType,
        initial?: GObject.Value | null,
        _final?: GObject.Value | null
    ): Interval;

    // Members

    clone(): Interval;
    compute(factor: number): unknown;
    compute_value(factor: number): [boolean, unknown];
    get_final_value(): unknown;
    get_initial_value(): unknown;
    get_value_type(): GObject.GType;
    is_valid(): boolean;
    peek_final_value(): unknown;
    peek_initial_value(): unknown;
    set_final(value: any): void;
    set_initial(value: any): void;
    validate(pspec: GObject.ParamSpec): boolean;
    vfunc_compute_value(factor: number): [boolean, unknown];
    vfunc_validate(pspec: GObject.ParamSpec): boolean;

    // Implemented Members

    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace KeyframeTransition {
    export interface ConstructorProperties
        extends PropertyTransition.ConstructorProperties {
        [key: string]: any;
    }
}
export class KeyframeTransition
    extends PropertyTransition
    implements Scriptable {
    static $gtype: GObject.GType<KeyframeTransition>;

    constructor(
        properties?: Partial<KeyframeTransition.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<KeyframeTransition.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](property_name: string): KeyframeTransition;
    static ['new'](...args: never[]): never;

    // Members

    clear(): void;
    get_key_frame(
        index_: number
    ): [number | null, AnimationMode | null, unknown];
    get_n_key_frames(): number;
    set_key_frame(
        index_: number,
        key: number,
        mode: AnimationMode,
        value: any
    ): void;
    set_key_frames(key_frames: number[]): void;
    set_modes(modes: AnimationMode[]): void;
    set_values(values: GObject.Value[]): void;

    // Implemented Members

    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace Keymap {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Keymap extends GObject.Object {
    static $gtype: GObject.GType<Keymap>;

    constructor(
        properties?: Partial<Keymap.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Keymap.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'state-changed', callback: (_source: this) => void): number;
    connect_after(
        signal: 'state-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'state-changed'): void;

    // Members

    get_caps_lock_state(): boolean;
    get_direction(): Pango.Direction;
    get_num_lock_state(): boolean;
    vfunc_get_caps_lock_state(): boolean;
    vfunc_get_direction(): Pango.Direction;
    vfunc_get_num_lock_state(): boolean;
}
export namespace LayerNode {
    export interface ConstructorProperties
        extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class LayerNode extends PaintNode {
    static $gtype: GObject.GType<LayerNode>;

    constructor(
        properties?: Partial<LayerNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<LayerNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](
        projection: Cogl.Matrix,
        viewport: cairo.Rectangle,
        width: number,
        height: number,
        opacity: number
    ): LayerNode;
}
export namespace LayoutManager {
    export interface ConstructorProperties
        extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class LayoutManager extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<LayoutManager>;

    constructor(
        properties?: Partial<LayoutManager.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<LayoutManager.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'layout-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'layout-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'layout-changed'): void;

    // Members

    allocate(container: Container, allocation: ActorBox): void;
    child_get_property(
        container: Container,
        actor: Actor,
        property_name: string,
        value: any
    ): void;
    child_set_property(
        container: Container,
        actor: Actor,
        property_name: string,
        value: any
    ): void;
    find_child_property(name: string): GObject.ParamSpec;
    get_child_meta(container: Container, actor: Actor): LayoutMeta;
    get_preferred_height(
        container: Container,
        for_width: number
    ): [number | null, number | null];
    get_preferred_width(
        container: Container,
        for_height: number
    ): [number | null, number | null];
    layout_changed(): void;
    list_child_properties(): GObject.ParamSpec[];
    set_container(container?: Container | null): void;
    vfunc_allocate(container: Container, allocation: ActorBox): void;
    vfunc_get_child_meta_type(): GObject.GType;
    vfunc_get_preferred_height(
        container: Container,
        for_width: number
    ): [number | null, number | null];
    vfunc_get_preferred_width(
        container: Container,
        for_height: number
    ): [number | null, number | null];
    vfunc_layout_changed(): void;
    vfunc_set_container(container?: Container | null): void;
}
export namespace LayoutMeta {
    export interface ConstructorProperties
        extends ChildMeta.ConstructorProperties {
        [key: string]: any;
        manager: LayoutManager;
    }
}
export abstract class LayoutMeta extends ChildMeta {
    static $gtype: GObject.GType<LayoutMeta>;

    constructor(
        properties?: Partial<LayoutMeta.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<LayoutMeta.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    manager: LayoutManager;

    // Members

    get_manager(): LayoutManager;
}
export namespace OffscreenEffect {
    export interface ConstructorProperties
        extends Effect.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class OffscreenEffect extends Effect {
    static $gtype: GObject.GType<OffscreenEffect>;

    constructor(
        properties?: Partial<OffscreenEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<OffscreenEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    create_texture(width: number, height: number): Cogl.Handle;
    get_target_rect(): [boolean, Graphene.Rect];
    get_target_size(): [boolean, number, number];
    get_texture(): Cogl.Handle;
    paint_target(paint_context: PaintContext): void;
    vfunc_create_texture(width: number, height: number): Cogl.Handle;
    vfunc_paint_target(paint_context: PaintContext): void;
}
export namespace PageTurnEffect {
    export interface ConstructorProperties
        extends DeformEffect.ConstructorProperties {
        [key: string]: any;
        angle: number;
        period: number;
        radius: number;
    }
}
export class PageTurnEffect extends DeformEffect {
    static $gtype: GObject.GType<PageTurnEffect>;

    constructor(
        properties?: Partial<PageTurnEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<PageTurnEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    angle: number;
    period: number;
    radius: number;

    // Constructors

    static ['new'](
        period: number,
        angle: number,
        radius: number
    ): PageTurnEffect;

    // Members

    get_angle(): number;
    get_period(): number;
    get_radius(): number;
    set_angle(angle: number): void;
    set_period(period: number): void;
    set_radius(radius: number): void;
}
export namespace PaintNode {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class PaintNode {
    static $gtype: GObject.GType<PaintNode>;

    constructor(
        properties?: Partial<PaintNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<PaintNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Members

    add_child(child: PaintNode): void;
    add_multitexture_rectangle(
        rect: ActorBox,
        text_coords: number,
        text_coords_len: number
    ): void;
    add_rectangle(rect: ActorBox): void;
    add_texture_rectangle(
        rect: ActorBox,
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number
    ): void;
    get_framebuffer(): Cogl.Framebuffer;
    paint(paint_context: PaintContext): void;
    ref(): PaintNode;
    set_name(name: string): void;
    unref(): void;
}
export namespace PanAction {
    export interface ConstructorProperties
        extends GestureAction.ConstructorProperties {
        [key: string]: any;
        acceleration_factor: number;
        accelerationFactor: number;
        deceleration: number;
        interpolate: boolean;
        pan_axis: PanAxis;
        panAxis: PanAxis;
    }
}
export class PanAction extends GestureAction {
    static $gtype: GObject.GType<PanAction>;

    constructor(
        properties?: Partial<PanAction.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<PanAction.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    acceleration_factor: number;
    accelerationFactor: number;
    deceleration: number;
    interpolate: boolean;
    pan_axis: PanAxis;
    panAxis: PanAxis;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'pan',
        callback: (
            _source: this,
            actor: Actor,
            is_interpolated: boolean
        ) => boolean
    ): number;
    connect_after(
        signal: 'pan',
        callback: (
            _source: this,
            actor: Actor,
            is_interpolated: boolean
        ) => boolean
    ): number;
    emit(signal: 'pan', actor: Actor, is_interpolated: boolean): void;
    connect(
        signal: 'pan-stopped',
        callback: (_source: this, actor: Actor) => void
    ): number;
    connect_after(
        signal: 'pan-stopped',
        callback: (_source: this, actor: Actor) => void
    ): number;
    emit(signal: 'pan-stopped', actor: Actor): void;

    // Constructors

    static ['new'](): PanAction;

    // Members

    get_acceleration_factor(): number;
    get_constrained_motion_delta(
        point: number
    ): [number, number | null, number | null];
    get_deceleration(): number;
    get_interpolate(): boolean;
    get_interpolated_coords(): [number | null, number | null];
    get_interpolated_delta(): [number, number | null, number | null];
    get_motion_coords(point: number): [number | null, number | null];
    get_motion_delta(point: number): [number, number | null, number | null];
    get_pan_axis(): PanAxis;
    set_acceleration_factor(factor: number): void;
    set_deceleration(rate: number): void;
    set_interpolate(should_interpolate: boolean): void;
    set_pan_axis(axis: PanAxis): void;
    vfunc_pan(actor: Actor, is_interpolated: boolean): boolean;
    vfunc_pan_stopped(actor: Actor): void;
}
export namespace ParamSpecUnit {
    export interface ConstructorProperties
        extends GObject.ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecUnit extends GObject.ParamSpec {
    static $gtype: GObject.GType<ParamSpecUnit>;

    constructor(
        properties?: Partial<ParamSpecUnit.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ParamSpecUnit.ConstructorProperties>,
        ...args: any[]
    ): void;
}
export namespace Path {
    export interface ConstructorProperties
        extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        description: string;
        length: number;
    }
}
export class Path extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<Path>;

    constructor(
        properties?: Partial<Path.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Path.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    description: string;
    length: number;

    // Constructors

    static ['new'](): Path;
    static new_with_description(desc: string): Path;

    // Members

    add_cairo_path(cpath: cairo.Path): void;
    add_close(): void;
    add_curve_to(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        x_3: number,
        y_3: number
    ): void;
    add_line_to(x: number, y: number): void;
    add_move_to(x: number, y: number): void;
    add_node(node: PathNode): void;
    add_rel_curve_to(
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number,
        x_3: number,
        y_3: number
    ): void;
    add_rel_line_to(x: number, y: number): void;
    add_rel_move_to(x: number, y: number): void;
    add_string(str: string): boolean;
    clear(): void;
    foreach(callback: PathCallback): void;
    get_description(): string;
    get_length(): number;
    get_n_nodes(): number;
    get_node(index_: number): PathNode;
    get_nodes(): PathNode[];
    get_position(progress: number): [number, Knot];
    insert_node(index_: number, node: PathNode): void;
    remove_node(index_: number): void;
    replace_node(index_: number, node: PathNode): void;
    set_description(str: string): boolean;
    to_cairo_path(cr: cairo.Context): void;
}
export namespace PathConstraint {
    export interface ConstructorProperties
        extends Constraint.ConstructorProperties {
        [key: string]: any;
        offset: number;
        path: Path;
    }
}
export class PathConstraint extends Constraint {
    static $gtype: GObject.GType<PathConstraint>;

    constructor(
        properties?: Partial<PathConstraint.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<PathConstraint.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    offset: number;
    path: Path;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'node-reached',
        callback: (_source: this, actor: Actor, index: number) => void
    ): number;
    connect_after(
        signal: 'node-reached',
        callback: (_source: this, actor: Actor, index: number) => void
    ): number;
    emit(signal: 'node-reached', actor: Actor, index: number): void;

    // Constructors

    static ['new'](path: Path | null, offset: number): PathConstraint;

    // Members

    get_offset(): number;
    get_path(): Path;
    set_offset(offset: number): void;
    set_path(path?: Path | null): void;
}
export namespace PipelineNode {
    export interface ConstructorProperties
        extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class PipelineNode extends PaintNode {
    static $gtype: GObject.GType<PipelineNode>;

    constructor(
        properties?: Partial<PipelineNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<PipelineNode.ConstructorProperties>,
        ...args: any[]
    ): void;
}
export namespace PropertyTransition {
    export interface ConstructorProperties
        extends Transition.ConstructorProperties {
        [key: string]: any;
        property_name: string;
        propertyName: string;
    }
}
export class PropertyTransition extends Transition implements Scriptable {
    static $gtype: GObject.GType<PropertyTransition>;

    constructor(
        properties?: Partial<PropertyTransition.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<PropertyTransition.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    property_name: string;
    propertyName: string;

    // Constructors

    static ['new'](property_name?: string | null): PropertyTransition;
    static ['new'](...args: never[]): never;
    static new_for_actor(
        actor: Actor,
        property_name?: string | null
    ): PropertyTransition;
    static new_for_actor(...args: never[]): never;

    // Members

    get_property_name(): string;
    set_property_name(property_name?: string | null): void;

    // Implemented Members

    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace RootNode {
    export interface ConstructorProperties
        extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class RootNode extends PaintNode {
    static $gtype: GObject.GType<RootNode>;

    constructor(
        properties?: Partial<RootNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<RootNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](
        framebuffer: Cogl.Framebuffer,
        clear_color: Color,
        clear_flags: Cogl.BufferBit
    ): RootNode;
}
export namespace RotateAction {
    export interface ConstructorProperties
        extends GestureAction.ConstructorProperties {
        [key: string]: any;
    }
}
export class RotateAction extends GestureAction {
    static $gtype: GObject.GType<RotateAction>;

    constructor(
        properties?: Partial<RotateAction.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<RotateAction.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'rotate',
        callback: (_source: this, actor: Actor, angle: number) => boolean
    ): number;
    connect_after(
        signal: 'rotate',
        callback: (_source: this, actor: Actor, angle: number) => boolean
    ): number;
    emit(signal: 'rotate', actor: Actor, angle: number): void;

    // Constructors

    static ['new'](): RotateAction;

    // Members

    vfunc_rotate(actor: Actor, angle: number): boolean;
}
export namespace Script {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filename: string;
        filename_set: boolean;
        filenameSet: boolean;
        translation_domain: string;
        translationDomain: string;
    }
}
export class Script extends GObject.Object {
    static $gtype: GObject.GType<Script>;

    constructor(
        properties?: Partial<Script.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Script.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    filename: string;
    filename_set: boolean;
    filenameSet: boolean;
    translation_domain: string;
    translationDomain: string;

    // Constructors

    static ['new'](): Script;

    // Members

    add_search_paths(paths: string[]): void;
    connect_signals(user_data?: any | null): void;
    connect_signals_full(func: ScriptConnectFunc): void;
    ensure_objects(): void;
    get_object<T = GObject.Object>(name: string): T;
    get_translation_domain(): string;
    get_type_from_name(type_name: string): GObject.GType;
    list_objects(): GObject.Object[];
    load_from_data(data: string, length: number): number;
    load_from_file(filename: string): number;
    load_from_resource(resource_path: string): number;
    lookup_filename(filename: string): string;
    set_translation_domain(domain?: string | null): void;
    unmerge_objects(merge_id: number): void;
    vfunc_get_type_from_name(type_name: string): GObject.GType;
}
export namespace ScrollActor {
    export interface ConstructorProperties<A extends Actor = Actor>
        extends Actor.ConstructorProperties {
        [key: string]: any;
        scroll_mode: ScrollMode;
        scrollMode: ScrollMode;
    }
}
export class ScrollActor<A extends Actor = Actor>
    extends Actor
    implements Atk.ImplementorIface, Animatable, Container<A>, Scriptable {
    static $gtype: GObject.GType<ScrollActor>;

    constructor(
        properties?: Partial<ScrollActor.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ScrollActor.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Properties
    scroll_mode: ScrollMode;
    scrollMode: ScrollMode;

    // Constructors

    static ['new'](): ScrollActor;

    // Members

    get_scroll_mode(): ScrollMode;
    scroll_to_point(point: Graphene.Point): void;
    scroll_to_rect(rect: Graphene.Rect): void;
    set_scroll_mode(mode: ScrollMode): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace Seat {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Backend;
        touch_mode: boolean;
        touchMode: boolean;
    }
}
export abstract class Seat extends GObject.Object {
    static $gtype: GObject.GType<Seat>;

    constructor(
        properties?: Partial<Seat.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Seat.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    backend: Backend;
    touch_mode: boolean;
    touchMode: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'device-added',
        callback: (_source: this, object: InputDevice) => void
    ): number;
    connect_after(
        signal: 'device-added',
        callback: (_source: this, object: InputDevice) => void
    ): number;
    emit(signal: 'device-added', object: InputDevice): void;
    connect(
        signal: 'device-removed',
        callback: (_source: this, object: InputDevice) => void
    ): number;
    connect_after(
        signal: 'device-removed',
        callback: (_source: this, object: InputDevice) => void
    ): number;
    emit(signal: 'device-removed', object: InputDevice): void;
    connect(
        signal: 'is-unfocus-inhibited-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'is-unfocus-inhibited-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'is-unfocus-inhibited-changed'): void;
    connect(
        signal: 'kbd-a11y-flags-changed',
        callback: (
            _source: this,
            settings_flags: number,
            changed_mask: number
        ) => void
    ): number;
    connect_after(
        signal: 'kbd-a11y-flags-changed',
        callback: (
            _source: this,
            settings_flags: number,
            changed_mask: number
        ) => void
    ): number;
    emit(
        signal: 'kbd-a11y-flags-changed',
        settings_flags: number,
        changed_mask: number
    ): void;
    connect(
        signal: 'kbd-a11y-mods-state-changed',
        callback: (
            _source: this,
            latched_mask: number,
            locked_mask: number
        ) => void
    ): number;
    connect_after(
        signal: 'kbd-a11y-mods-state-changed',
        callback: (
            _source: this,
            latched_mask: number,
            locked_mask: number
        ) => void
    ): number;
    emit(
        signal: 'kbd-a11y-mods-state-changed',
        latched_mask: number,
        locked_mask: number
    ): void;
    connect(
        signal: 'ptr-a11y-dwell-click-type-changed',
        callback: (_source: this, click_type: PointerA11yDwellClickType) => void
    ): number;
    connect_after(
        signal: 'ptr-a11y-dwell-click-type-changed',
        callback: (_source: this, click_type: PointerA11yDwellClickType) => void
    ): number;
    emit(
        signal: 'ptr-a11y-dwell-click-type-changed',
        click_type: PointerA11yDwellClickType
    ): void;
    connect(
        signal: 'ptr-a11y-timeout-started',
        callback: (
            _source: this,
            device: InputDevice,
            timeout_type: PointerA11yTimeoutType,
            delay: number
        ) => void
    ): number;
    connect_after(
        signal: 'ptr-a11y-timeout-started',
        callback: (
            _source: this,
            device: InputDevice,
            timeout_type: PointerA11yTimeoutType,
            delay: number
        ) => void
    ): number;
    emit(
        signal: 'ptr-a11y-timeout-started',
        device: InputDevice,
        timeout_type: PointerA11yTimeoutType,
        delay: number
    ): void;
    connect(
        signal: 'ptr-a11y-timeout-stopped',
        callback: (
            _source: this,
            device: InputDevice,
            timeout_type: PointerA11yTimeoutType,
            clicked: boolean
        ) => void
    ): number;
    connect_after(
        signal: 'ptr-a11y-timeout-stopped',
        callback: (
            _source: this,
            device: InputDevice,
            timeout_type: PointerA11yTimeoutType,
            clicked: boolean
        ) => void
    ): number;
    emit(
        signal: 'ptr-a11y-timeout-stopped',
        device: InputDevice,
        timeout_type: PointerA11yTimeoutType,
        clicked: boolean
    ): void;
    connect(
        signal: 'tool-changed',
        callback: (
            _source: this,
            object: InputDevice,
            p0: InputDeviceTool
        ) => void
    ): number;
    connect_after(
        signal: 'tool-changed',
        callback: (
            _source: this,
            object: InputDevice,
            p0: InputDeviceTool
        ) => void
    ): number;
    emit(
        signal: 'tool-changed',
        object: InputDevice,
        p0: InputDeviceTool
    ): void;

    // Members

    bell_notify(): void;
    compress_motion(event: Event, to_discard: Event): void;
    create_virtual_device(device_type: InputDeviceType): VirtualInputDevice;
    ensure_a11y_state(): void;
    get_kbd_a11y_settings(settings: KbdA11ySettings): void;
    get_keyboard(): InputDevice;
    get_keymap(): Keymap;
    get_pointer(): InputDevice;
    get_pointer_a11y_settings(settings: PointerA11ySettings): void;
    get_touch_mode(): boolean;
    handle_device_event(event: Event): boolean;
    inhibit_unfocus(): void;
    is_unfocus_inhibited(): boolean;
    list_devices(): InputDevice[];
    set_kbd_a11y_settings(settings: KbdA11ySettings): void;
    set_pointer_a11y_dwell_click_type(
        click_type: PointerA11yDwellClickType
    ): void;
    set_pointer_a11y_settings(settings: PointerA11ySettings): void;
    uninhibit_unfocus(): void;
    warp_pointer(x: number, y: number): void;
    vfunc_apply_kbd_a11y_settings(settings: KbdA11ySettings): void;
    vfunc_bell_notify(): void;
    vfunc_compress_motion(event: Event, to_discard: Event): void;
    vfunc_copy_event_data(src: Event, dest: Event): void;
    vfunc_create_virtual_device(
        device_type: InputDeviceType
    ): VirtualInputDevice;
    vfunc_free_event_data(event: Event): void;
    vfunc_get_keyboard(): InputDevice;
    vfunc_get_keymap(): Keymap;
    vfunc_get_pointer(): InputDevice;
    vfunc_handle_device_event(event: Event): boolean;
    vfunc_warp_pointer(x: number, y: number): void;
}
export namespace Settings {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Backend;
        dnd_drag_threshold: number;
        dndDragThreshold: number;
        double_click_distance: number;
        doubleClickDistance: number;
        double_click_time: number;
        doubleClickTime: number;
        font_antialias: number;
        fontAntialias: number;
        font_dpi: number;
        fontDpi: number;
        font_hint_style: string;
        fontHintStyle: string;
        font_hinting: number;
        fontHinting: number;
        font_name: string;
        fontName: string;
        font_subpixel_order: string;
        fontSubpixelOrder: string;
        fontconfig_timestamp: number;
        fontconfigTimestamp: number;
        long_press_duration: number;
        longPressDuration: number;
        password_hint_time: number;
        passwordHintTime: number;
        unscaled_font_dpi: number;
        unscaledFontDpi: number;
    }
}
export class Settings extends GObject.Object {
    static $gtype: GObject.GType<Settings>;

    constructor(
        properties?: Partial<Settings.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Settings.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    backend: Backend;
    dnd_drag_threshold: number;
    dndDragThreshold: number;
    double_click_distance: number;
    doubleClickDistance: number;
    double_click_time: number;
    doubleClickTime: number;
    font_antialias: number;
    fontAntialias: number;
    font_dpi: number;
    fontDpi: number;
    font_hint_style: string;
    fontHintStyle: string;
    font_hinting: number;
    fontHinting: number;
    font_name: string;
    fontName: string;
    font_subpixel_order: string;
    fontSubpixelOrder: string;
    fontconfig_timestamp: number;
    fontconfigTimestamp: number;
    long_press_duration: number;
    longPressDuration: number;
    password_hint_time: number;
    passwordHintTime: number;
    unscaled_font_dpi: number;
    unscaledFontDpi: number;

    // Members

    static get_default(): Settings;
}
export namespace ShaderEffect {
    export interface ConstructorProperties
        extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        shader_type: ShaderType;
        shaderType: ShaderType;
    }
}
export class ShaderEffect extends OffscreenEffect {
    static $gtype: GObject.GType<ShaderEffect>;

    constructor(
        properties?: Partial<ShaderEffect.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ShaderEffect.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    shader_type: ShaderType;
    shaderType: ShaderType;

    // Constructors

    static ['new'](shader_type: ShaderType): ShaderEffect;

    // Members

    get_program(): Cogl.Handle;
    get_shader(): Cogl.Handle;
    set_shader_source(source: string): boolean;
    set_uniform_value(name: string, value: any): void;
    vfunc_get_static_shader_source(): string;
}
export namespace ShaderFloat {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class ShaderFloat {
    static $gtype: GObject.GType<ShaderFloat>;

    constructor(
        properties?: Partial<ShaderFloat.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ShaderFloat.ConstructorProperties>,
        ...args: any[]
    ): void;
}
export namespace ShaderInt {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class ShaderInt {
    static $gtype: GObject.GType<ShaderInt>;

    constructor(
        properties?: Partial<ShaderInt.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ShaderInt.ConstructorProperties>,
        ...args: any[]
    ): void;
}
export namespace ShaderMatrix {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class ShaderMatrix {
    static $gtype: GObject.GType<ShaderMatrix>;

    constructor(
        properties?: Partial<ShaderMatrix.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ShaderMatrix.ConstructorProperties>,
        ...args: any[]
    ): void;
}
export namespace SnapConstraint {
    export interface ConstructorProperties
        extends Constraint.ConstructorProperties {
        [key: string]: any;
        from_edge: SnapEdge;
        fromEdge: SnapEdge;
        offset: number;
        source: Actor;
        to_edge: SnapEdge;
        toEdge: SnapEdge;
    }
}
export class SnapConstraint extends Constraint {
    static $gtype: GObject.GType<SnapConstraint>;

    constructor(
        properties?: Partial<SnapConstraint.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<SnapConstraint.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    from_edge: SnapEdge;
    fromEdge: SnapEdge;
    offset: number;
    source: Actor;
    to_edge: SnapEdge;
    toEdge: SnapEdge;

    // Constructors

    static ['new'](
        source: Actor | null,
        from_edge: SnapEdge,
        to_edge: SnapEdge,
        offset: number
    ): SnapConstraint;

    // Members

    get_edges(): [SnapEdge, SnapEdge];
    get_offset(): number;
    get_source(): Actor;
    set_edges(from_edge: SnapEdge, to_edge: SnapEdge): void;
    set_offset(offset: number): void;
    set_source(source?: Actor | null): void;
}
export namespace Stage {
    export interface ConstructorProperties<A extends Actor = Actor>
        extends Actor.ConstructorProperties {
        [key: string]: any;
        key_focus: Actor;
        keyFocus: Actor;
        perspective: Perspective;
        title: string;
    }
}
export class Stage<A extends Actor = Actor>
    extends Actor
    implements Atk.ImplementorIface, Animatable, Container<A>, Scriptable {
    static $gtype: GObject.GType<Stage>;

    constructor(
        properties?: Partial<Stage.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Stage.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Properties
    key_focus: Actor;
    keyFocus: Actor;
    perspective: Perspective;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(
        signal: 'activate',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'activate'): void;
    connect(
        signal: 'after-paint',
        callback: (_source: this, view: StageView) => void
    ): number;
    connect_after(
        signal: 'after-paint',
        callback: (_source: this, view: StageView) => void
    ): number;
    emit(signal: 'after-paint', view: StageView): void;
    connect(
        signal: 'after-update',
        callback: (_source: this, view: StageView) => void
    ): number;
    connect_after(
        signal: 'after-update',
        callback: (_source: this, view: StageView) => void
    ): number;
    emit(signal: 'after-update', view: StageView): void;
    connect(
        signal: 'before-paint',
        callback: (_source: this, view: StageView) => void
    ): number;
    connect_after(
        signal: 'before-paint',
        callback: (_source: this, view: StageView) => void
    ): number;
    emit(signal: 'before-paint', view: StageView): void;
    connect(
        signal: 'before-update',
        callback: (_source: this, view: StageView) => void
    ): number;
    connect_after(
        signal: 'before-update',
        callback: (_source: this, view: StageView) => void
    ): number;
    emit(signal: 'before-update', view: StageView): void;
    connect(signal: 'deactivate', callback: (_source: this) => void): number;
    connect_after(
        signal: 'deactivate',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'deactivate'): void;
    connect(
        signal: 'gl-video-memory-purged',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'gl-video-memory-purged',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'gl-video-memory-purged'): void;
    connect(
        signal: 'paint-view',
        callback: (
            _source: this,
            view: StageView,
            redraw_clip: cairo.Region
        ) => void
    ): number;
    connect_after(
        signal: 'paint-view',
        callback: (
            _source: this,
            view: StageView,
            redraw_clip: cairo.Region
        ) => void
    ): number;
    emit(
        signal: 'paint-view',
        view: StageView,
        redraw_clip: cairo.Region
    ): void;
    connect(
        signal: 'presented',
        callback: (
            _source: this,
            view: StageView,
            frame_info: any | null
        ) => void
    ): number;
    connect_after(
        signal: 'presented',
        callback: (
            _source: this,
            view: StageView,
            frame_info: any | null
        ) => void
    ): number;
    emit(signal: 'presented', view: StageView, frame_info: any | null): void;

    // Members

    capture_into(paint: boolean, rect: cairo.RectangleInt, data: number): void;
    clear_stage_views(): void;
    ensure_viewport(): void;
    event(event: Event): boolean;
    event(...args: never[]): never;
    get_actor_at_pos(pick_mode: PickMode, x: number, y: number): Actor;
    get_capture_final_size(
        rect: cairo.RectangleInt,
        width: number,
        height: number,
        scale: number
    ): boolean;
    get_frame_counter(): number;
    get_key_focus(): Actor;
    get_minimum_size(): [number, number];
    get_motion_events_enabled(): boolean;
    get_perspective(): Perspective | null;
    get_throttle_motion_events(): boolean;
    get_title(): string;
    get_use_alpha(): boolean;
    paint_to_buffer(
        rect: cairo.RectangleInt,
        scale: number,
        data: number,
        stride: number,
        format: Cogl.PixelFormat,
        paint_flags: PaintFlag
    ): boolean;
    paint_to_framebuffer(
        framebuffer: Cogl.Framebuffer,
        rect: cairo.RectangleInt,
        scale: number,
        paint_flags: PaintFlag
    ): void;
    read_pixels(
        x: number,
        y: number,
        width: number,
        height: number
    ): Uint8Array;
    schedule_update(): void;
    set_key_focus(actor?: Actor | null): void;
    set_minimum_size(width: number, height: number): void;
    set_motion_events_enabled(enabled: boolean): void;
    set_throttle_motion_events(throttle: boolean): void;
    set_title(title: string): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_activate(): void;
    vfunc_before_paint(view: StageView): void;
    vfunc_deactivate(): void;
    vfunc_paint_view(view: StageView, redraw_clip: cairo.Region): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace StageManager {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        default_stage: Stage;
        defaultStage: Stage;
    }
}
export class StageManager extends GObject.Object {
    static $gtype: GObject.GType<StageManager>;

    constructor(
        properties?: Partial<StageManager.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<StageManager.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    default_stage: Stage;
    defaultStage: Stage;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'stage-added',
        callback: (_source: this, stage: Stage) => void
    ): number;
    connect_after(
        signal: 'stage-added',
        callback: (_source: this, stage: Stage) => void
    ): number;
    emit(signal: 'stage-added', stage: Stage): void;
    connect(
        signal: 'stage-removed',
        callback: (_source: this, stage: Stage) => void
    ): number;
    connect_after(
        signal: 'stage-removed',
        callback: (_source: this, stage: Stage) => void
    ): number;
    emit(signal: 'stage-removed', stage: Stage): void;

    // Members

    get_default_stage(): Stage;
    list_stages(): Stage[];
    peek_stages(): Stage[];
    vfunc_stage_added(stage: Stage): void;
    vfunc_stage_removed(stage: Stage): void;
    static get_default(): StageManager;
}
export namespace StageView {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        layout: cairo.RectangleInt;
        name: string;
        refresh_rate: number;
        refreshRate: number;
        scale: number;
        stage: Stage;
        use_shadowfb: boolean;
        useShadowfb: boolean;
    }
}
export class StageView extends GObject.Object {
    static $gtype: GObject.GType<StageView>;

    constructor(
        properties?: Partial<StageView.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<StageView.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    layout: cairo.RectangleInt;
    name: string;
    refresh_rate: number;
    refreshRate: number;
    scale: number;
    stage: Stage;
    use_shadowfb: boolean;
    useShadowfb: boolean;

    // Members

    assign_next_scanout(scanout: Cogl.Scanout): void;
    destroy(): void;
    get_framebuffer(): Cogl.Framebuffer;
    get_layout(rect: cairo.RectangleInt): void;
    get_offscreen_transformation_matrix(matrix: Cogl.Matrix): void;
    get_onscreen(): Cogl.Framebuffer;
    get_refresh_rate(): number;
    get_scale(): number;
    invalidate_offscreen_blit_pipeline(): void;
    vfunc_get_offscreen_transformation_matrix(matrix: Cogl.Matrix): void;
    vfunc_setup_offscreen_blit_pipeline(pipeline: Cogl.Pipeline): void;
    vfunc_transform_rect_to_onscreen(
        src_rect: cairo.RectangleInt,
        dst_width: number,
        dst_height: number,
        dst_rect: cairo.RectangleInt
    ): void;
}
export namespace SwipeAction {
    export interface ConstructorProperties
        extends GestureAction.ConstructorProperties {
        [key: string]: any;
    }
}
export class SwipeAction extends GestureAction {
    static $gtype: GObject.GType<SwipeAction>;

    constructor(
        properties?: Partial<SwipeAction.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<SwipeAction.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'swept',
        callback: (
            _source: this,
            actor: Actor,
            direction: SwipeDirection
        ) => void
    ): number;
    connect_after(
        signal: 'swept',
        callback: (
            _source: this,
            actor: Actor,
            direction: SwipeDirection
        ) => void
    ): number;
    emit(signal: 'swept', actor: Actor, direction: SwipeDirection): void;
    connect(
        signal: 'swipe',
        callback: (
            _source: this,
            actor: Actor,
            direction: SwipeDirection
        ) => boolean
    ): number;
    connect_after(
        signal: 'swipe',
        callback: (
            _source: this,
            actor: Actor,
            direction: SwipeDirection
        ) => boolean
    ): number;
    emit(signal: 'swipe', actor: Actor, direction: SwipeDirection): void;

    // Constructors

    static ['new'](): SwipeAction;

    // Members

    vfunc_swept(actor: Actor, direction: SwipeDirection): void;
    vfunc_swipe(actor: Actor, direction: SwipeDirection): boolean;
}
export namespace TapAction {
    export interface ConstructorProperties
        extends GestureAction.ConstructorProperties {
        [key: string]: any;
    }
}
export class TapAction extends GestureAction {
    static $gtype: GObject.GType<TapAction>;

    constructor(
        properties?: Partial<TapAction.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<TapAction.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'tap',
        callback: (_source: this, actor: Actor) => void
    ): number;
    connect_after(
        signal: 'tap',
        callback: (_source: this, actor: Actor) => void
    ): number;
    emit(signal: 'tap', actor: Actor): void;

    // Constructors

    static ['new'](): TapAction;

    // Members

    vfunc_tap(actor: Actor): boolean;
}
export namespace Text {
    export interface ConstructorProperties<A extends Actor = Actor>
        extends Actor.ConstructorProperties {
        [key: string]: any;
        activatable: boolean;
        attributes: Pango.AttrList;
        buffer: TextBuffer;
        color: Color;
        cursor_color: Color;
        cursorColor: Color;
        cursor_color_set: boolean;
        cursorColorSet: boolean;
        cursor_position: number;
        cursorPosition: number;
        cursor_size: number;
        cursorSize: number;
        cursor_visible: boolean;
        cursorVisible: boolean;
        editable: boolean;
        ellipsize: Pango.EllipsizeMode;
        font_description: Pango.FontDescription;
        fontDescription: Pango.FontDescription;
        font_name: string;
        fontName: string;
        input_hints: InputContentHintFlags;
        inputHints: InputContentHintFlags;
        input_purpose: InputContentPurpose;
        inputPurpose: InputContentPurpose;
        justify: boolean;
        line_alignment: Pango.Alignment;
        lineAlignment: Pango.Alignment;
        line_wrap: boolean;
        lineWrap: boolean;
        line_wrap_mode: Pango.WrapMode;
        lineWrapMode: Pango.WrapMode;
        max_length: number;
        maxLength: number;
        password_char: number;
        passwordChar: number;
        position: number | any;
        selectable: boolean;
        selected_text_color: Color;
        selectedTextColor: Color;
        selected_text_color_set: boolean;
        selectedTextColorSet: boolean;
        selection_bound: number;
        selectionBound: number;
        selection_color: Color;
        selectionColor: Color;
        selection_color_set: boolean;
        selectionColorSet: boolean;
        single_line_mode: boolean;
        singleLineMode: boolean;
        text: string;
        use_markup: boolean;
        useMarkup: boolean;
    }
}
export class Text<A extends Actor = Actor>
    extends Actor
    implements Atk.ImplementorIface, Animatable, Container<A>, Scriptable {
    static $gtype: GObject.GType<Text>;

    constructor(
        properties?: Partial<Text.ConstructorProperties<A>>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Text.ConstructorProperties<A>>,
        ...args: any[]
    ): void;

    // Properties
    activatable: boolean;
    attributes: Pango.AttrList;
    buffer: TextBuffer;
    color: Color;
    cursor_color: Color;
    cursorColor: Color;
    cursor_color_set: boolean;
    cursorColorSet: boolean;
    cursor_position: number;
    cursorPosition: number;
    cursor_size: number;
    cursorSize: number;
    cursor_visible: boolean;
    cursorVisible: boolean;
    editable: boolean;
    ellipsize: Pango.EllipsizeMode;
    font_description: Pango.FontDescription;
    fontDescription: Pango.FontDescription;
    font_name: string;
    fontName: string;
    input_hints: InputContentHintFlags;
    inputHints: InputContentHintFlags;
    input_purpose: InputContentPurpose;
    inputPurpose: InputContentPurpose;
    justify: boolean;
    line_alignment: Pango.Alignment;
    lineAlignment: Pango.Alignment;
    line_wrap: boolean;
    lineWrap: boolean;
    line_wrap_mode: Pango.WrapMode;
    lineWrapMode: Pango.WrapMode;
    max_length: number;
    maxLength: number;
    password_char: number;
    passwordChar: number;
    position: number | any;
    selectable: boolean;
    selected_text_color: Color;
    selectedTextColor: Color;
    selected_text_color_set: boolean;
    selectedTextColorSet: boolean;
    selection_bound: number;
    selectionBound: number;
    selection_color: Color;
    selectionColor: Color;
    selection_color_set: boolean;
    selectionColorSet: boolean;
    single_line_mode: boolean;
    singleLineMode: boolean;
    text: string;
    use_markup: boolean;
    useMarkup: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(
        signal: 'activate',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'activate'): void;
    connect(
        signal: 'cursor-changed',
        callback: (_source: this) => void
    ): number;
    connect_after(
        signal: 'cursor-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'cursor-changed'): void;
    connect(
        signal: 'cursor-event',
        callback: (_source: this, rect: Graphene.Rect) => void
    ): number;
    connect_after(
        signal: 'cursor-event',
        callback: (_source: this, rect: Graphene.Rect) => void
    ): number;
    emit(signal: 'cursor-event', rect: Graphene.Rect): void;
    connect(
        signal: 'delete-text',
        callback: (_source: this, start_pos: number, end_pos: number) => void
    ): number;
    connect_after(
        signal: 'delete-text',
        callback: (_source: this, start_pos: number, end_pos: number) => void
    ): number;
    emit(signal: 'delete-text', start_pos: number, end_pos: number): void;
    connect(
        signal: 'insert-text',
        callback: (
            _source: this,
            new_text: string,
            new_text_length: number,
            position: any | null
        ) => void
    ): number;
    connect_after(
        signal: 'insert-text',
        callback: (
            _source: this,
            new_text: string,
            new_text_length: number,
            position: any | null
        ) => void
    ): number;
    emit(
        signal: 'insert-text',
        new_text: string,
        new_text_length: number,
        position: any | null
    ): void;
    connect(signal: 'text-changed', callback: (_source: this) => void): number;
    connect_after(
        signal: 'text-changed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'text-changed'): void;

    // Constructors

    static ['new'](): Text;
    static new_full(font_name: string, text: string, color: Color): Text;
    static new_with_buffer(buffer: TextBuffer): Text;
    static new_with_text(font_name: string | null, text: string): Text;

    // Members

    activate(): boolean;
    coords_to_position(x: number, y: number): number;
    delete_chars(n_chars: number): void;
    delete_selection(): boolean;
    delete_text(start_pos: number, end_pos: number): void;
    get_activatable(): boolean;
    get_attributes(): Pango.AttrList;
    get_buffer(): TextBuffer;
    get_chars(start_pos: number, end_pos: number): string;
    get_color(): Color;
    get_cursor_color(): Color;
    get_cursor_position(): number;
    get_cursor_rect(): Graphene.Rect;
    get_cursor_size(): number;
    get_cursor_visible(): boolean;
    get_editable(): boolean;
    get_ellipsize(): Pango.EllipsizeMode;
    get_font_description(): Pango.FontDescription;
    get_font_name(): string;
    get_input_hints(): InputContentHintFlags;
    get_input_purpose(): InputContentPurpose;
    get_justify(): boolean;
    get_layout(): Pango.Layout;
    get_layout_offsets(): [number, number];
    get_line_alignment(): Pango.Alignment;
    get_line_wrap(): boolean;
    get_line_wrap_mode(): Pango.WrapMode;
    get_max_length(): number;
    get_password_char(): number;
    get_selectable(): boolean;
    get_selected_text_color(): Color;
    get_selection(): string;
    get_selection_bound(): number;
    get_selection_color(): Color;
    get_single_line_mode(): boolean;
    get_text(): string;
    get_use_markup(): boolean;
    has_preedit(): boolean;
    insert_text(text: string, position: number): void;
    insert_unichar(wc: number): void;
    position_to_coords(position: number): [boolean, number, number, number];
    set_activatable(activatable: boolean): void;
    set_attributes(attrs?: Pango.AttrList | null): void;
    set_buffer(buffer: TextBuffer): void;
    set_color(color: Color): void;
    set_cursor_color(color?: Color | null): void;
    set_cursor_position(position: number): void;
    set_cursor_size(size: number): void;
    set_cursor_visible(cursor_visible: boolean): void;
    set_editable(editable: boolean): void;
    set_ellipsize(mode: Pango.EllipsizeMode): void;
    set_font_description(font_desc: Pango.FontDescription): void;
    set_font_name(font_name?: string | null): void;
    set_input_hints(hints: InputContentHintFlags): void;
    set_input_purpose(purpose: InputContentPurpose): void;
    set_justify(justify: boolean): void;
    set_line_alignment(alignment: Pango.Alignment): void;
    set_line_wrap(line_wrap: boolean): void;
    set_line_wrap_mode(wrap_mode: Pango.WrapMode): void;
    set_markup(markup?: string | null): void;
    set_max_length(max: number): void;
    set_password_char(wc: number): void;
    set_preedit_string(
        preedit_str: string | null,
        preedit_attrs: Pango.AttrList | null,
        cursor_pos: number
    ): void;
    set_selectable(selectable: boolean): void;
    set_selected_text_color(color?: Color | null): void;
    set_selection(start_pos: number, end_pos: number): void;
    set_selection_bound(selection_bound: number): void;
    set_selection_color(color?: Color | null): void;
    set_single_line_mode(single_line: boolean): void;
    set_text(text?: string | null): void;
    set_use_markup(setting: boolean): void;
    vfunc_activate(): void;
    vfunc_cursor_changed(): void;
    vfunc_cursor_event(rect: Graphene.Rect): void;
    vfunc_text_changed(): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): ChildMeta;
    get_children(): A[];
    get_children(...args: never[]): never;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace TextBuffer {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        length: number;
        max_length: number;
        maxLength: number;
        text: string;
    }
}
export class TextBuffer extends GObject.Object {
    static $gtype: GObject.GType<TextBuffer>;

    constructor(
        properties?: Partial<TextBuffer.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<TextBuffer.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    length: number;
    max_length: number;
    maxLength: number;
    text: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'deleted-text',
        callback: (_source: this, position: number, n_chars: number) => void
    ): number;
    connect_after(
        signal: 'deleted-text',
        callback: (_source: this, position: number, n_chars: number) => void
    ): number;
    emit(signal: 'deleted-text', position: number, n_chars: number): void;
    connect(
        signal: 'inserted-text',
        callback: (
            _source: this,
            position: number,
            chars: string,
            n_chars: number
        ) => void
    ): number;
    connect_after(
        signal: 'inserted-text',
        callback: (
            _source: this,
            position: number,
            chars: string,
            n_chars: number
        ) => void
    ): number;
    emit(
        signal: 'inserted-text',
        position: number,
        chars: string,
        n_chars: number
    ): void;

    // Constructors

    static ['new'](): TextBuffer;
    static new_with_text(text: string | null, text_len: number): TextBuffer;

    // Members

    delete_text(position: number, n_chars: number): number;
    emit_deleted_text(position: number, n_chars: number): void;
    emit_inserted_text(position: number, chars: string, n_chars: number): void;
    get_bytes(): number;
    get_length(): number;
    get_max_length(): number;
    get_text(): string;
    insert_text(position: number, chars: string, n_chars: number): number;
    set_max_length(max_length: number): void;
    set_text(chars: string, n_chars: number): void;
    vfunc_delete_text(position: number, n_chars: number): number;
    vfunc_deleted_text(position: number, n_chars: number): void;
    vfunc_get_length(): number;
    vfunc_get_text(n_bytes: number): string;
    vfunc_insert_text(position: number, chars: string, n_chars: number): number;
    vfunc_inserted_text(position: number, chars: string, n_chars: number): void;
}
export namespace TextNode {
    export interface ConstructorProperties
        extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextNode extends PaintNode {
    static $gtype: GObject.GType<TextNode>;

    constructor(
        properties?: Partial<TextNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<TextNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](
        layout?: Pango.Layout | null,
        color?: Color | null
    ): TextNode;
}
export namespace TextureNode {
    export interface ConstructorProperties
        extends PipelineNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextureNode extends PipelineNode {
    static $gtype: GObject.GType<TextureNode>;

    constructor(
        properties?: Partial<TextureNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<TextureNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](
        texture: Cogl.Texture,
        color: Color | null,
        min_filter: ScalingFilter,
        mag_filter: ScalingFilter
    ): TextureNode;
}
export namespace Timeline {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        actor: Actor;
        auto_reverse: boolean;
        autoReverse: boolean;
        delay: number;
        direction: TimelineDirection;
        duration: number;
        frame_clock: FrameClock;
        frameClock: FrameClock;
        progress_mode: AnimationMode;
        progressMode: AnimationMode;
        repeat_count: number;
        repeatCount: number;
    }
}
export class Timeline extends GObject.Object implements Scriptable {
    static $gtype: GObject.GType<Timeline>;

    constructor(
        properties?: Partial<Timeline.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Timeline.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    actor: Actor;
    auto_reverse: boolean;
    autoReverse: boolean;
    delay: number;
    direction: TimelineDirection;
    duration: number;
    frame_clock: FrameClock;
    frameClock: FrameClock;
    progress_mode: AnimationMode;
    progressMode: AnimationMode;
    repeat_count: number;
    repeatCount: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'completed', callback: (_source: this) => void): number;
    connect_after(
        signal: 'completed',
        callback: (_source: this) => void
    ): number;
    emit(signal: 'completed'): void;
    connect(
        signal: 'marker-reached',
        callback: (_source: this, marker_name: string, msecs: number) => void
    ): number;
    connect_after(
        signal: 'marker-reached',
        callback: (_source: this, marker_name: string, msecs: number) => void
    ): number;
    emit(signal: 'marker-reached', marker_name: string, msecs: number): void;
    connect(
        signal: 'new-frame',
        callback: (_source: this, msecs: number) => void
    ): number;
    connect_after(
        signal: 'new-frame',
        callback: (_source: this, msecs: number) => void
    ): number;
    emit(signal: 'new-frame', msecs: number): void;
    connect(signal: 'paused', callback: (_source: this) => void): number;
    connect_after(signal: 'paused', callback: (_source: this) => void): number;
    emit(signal: 'paused'): void;
    connect(signal: 'started', callback: (_source: this) => void): number;
    connect_after(signal: 'started', callback: (_source: this) => void): number;
    emit(signal: 'started'): void;
    connect(
        signal: 'stopped',
        callback: (_source: this, is_finished: boolean) => void
    ): number;
    connect_after(
        signal: 'stopped',
        callback: (_source: this, is_finished: boolean) => void
    ): number;
    emit(signal: 'stopped', is_finished: boolean): void;

    // Constructors

    static ['new'](duration_ms: number): Timeline;
    static new_for_actor(actor: Actor, duration_ms: number): Timeline;
    static new_for_frame_clock(
        frame_clock: FrameClock,
        duration_ms: number
    ): Timeline;

    // Members

    add_marker(marker_name: string, progress: number): void;
    add_marker_at_time(marker_name: string, msecs: number): void;
    advance(msecs: number): void;
    advance_to_marker(marker_name: string): void;
    get_actor(): Actor;
    get_auto_reverse(): boolean;
    get_cubic_bezier_progress(): [boolean, Graphene.Point, Graphene.Point];
    get_current_repeat(): number;
    get_delay(): number;
    get_delta(): number;
    get_direction(): TimelineDirection;
    get_duration(): number;
    get_duration_hint(): number;
    get_elapsed_time(): number;
    get_progress(): number;
    get_progress_mode(): AnimationMode;
    get_repeat_count(): number;
    get_step_progress(): [boolean, number, StepMode];
    has_marker(marker_name: string): boolean;
    is_playing(): boolean;
    list_markers(msecs: number): string[];
    pause(): void;
    remove_marker(marker_name: string): void;
    rewind(): void;
    set_actor(actor?: Actor | null): void;
    set_auto_reverse(reverse: boolean): void;
    set_cubic_bezier_progress(c_1: Graphene.Point, c_2: Graphene.Point): void;
    set_delay(msecs: number): void;
    set_direction(direction: TimelineDirection): void;
    set_duration(msecs: number): void;
    set_frame_clock(frame_clock: FrameClock): void;
    set_progress_func(func?: TimelineProgressFunc | null): void;
    set_progress_mode(mode: AnimationMode): void;
    set_repeat_count(count: number): void;
    set_step_progress(n_steps: number, step_mode: StepMode): void;
    skip(msecs: number): void;
    start(): void;
    stop(): void;
    vfunc_completed(): void;
    vfunc_marker_reached(marker_name: string, msecs: number): void;
    vfunc_new_frame(msecs: number): void;
    vfunc_paused(): void;
    vfunc_started(): void;
    vfunc_stopped(is_finished: boolean): void;

    // Implemented Members

    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace TransformNode {
    export interface ConstructorProperties
        extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TransformNode extends PaintNode {
    static $gtype: GObject.GType<TransformNode>;

    constructor(
        properties?: Partial<TransformNode.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<TransformNode.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](projection: Cogl.Matrix): TransformNode;
}
export namespace Transition {
    export interface ConstructorProperties
        extends Timeline.ConstructorProperties {
        [key: string]: any;
        animatable: Animatable;
        interval: Interval;
        remove_on_complete: boolean;
        removeOnComplete: boolean;
    }
}
export abstract class Transition extends Timeline implements Scriptable {
    static $gtype: GObject.GType<Transition>;

    constructor(
        properties?: Partial<Transition.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<Transition.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    animatable: Animatable;
    interval: Interval;
    remove_on_complete: boolean;
    removeOnComplete: boolean;

    // Members

    get_animatable(): Animatable;
    get_interval(): Interval;
    get_remove_on_complete(): boolean;
    set_animatable(animatable?: Animatable | null): void;
    set_from(value: any): void;
    set_interval(interval?: Interval | null): void;
    set_remove_on_complete(remove_complete: boolean): void;
    set_to(value: any): void;
    vfunc_attached(animatable: Animatable): void;
    vfunc_compute_value(
        animatable: Animatable,
        interval: Interval,
        progress: number
    ): void;
    vfunc_detached(animatable: Animatable): void;

    // Implemented Members

    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace TransitionGroup {
    export interface ConstructorProperties
        extends Transition.ConstructorProperties {
        [key: string]: any;
    }
}
export class TransitionGroup extends Transition implements Scriptable {
    static $gtype: GObject.GType<TransitionGroup>;

    constructor(
        properties?: Partial<TransitionGroup.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<TransitionGroup.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Constructors

    static ['new'](): TransitionGroup;
    static ['new'](...args: never[]): never;

    // Members

    add_transition(transition: Transition): void;
    remove_all(): void;
    remove_transition(transition: Transition): void;

    // Implemented Members

    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}
export namespace VirtualInputDevice {
    export interface ConstructorProperties
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        device_type: InputDeviceType;
        deviceType: InputDeviceType;
        seat: Seat;
    }
}
export class VirtualInputDevice extends GObject.Object {
    static $gtype: GObject.GType<VirtualInputDevice>;

    constructor(
        properties?: Partial<VirtualInputDevice.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<VirtualInputDevice.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    device_type: InputDeviceType;
    deviceType: InputDeviceType;
    seat: Seat;

    // Members

    get_device_type(): number;
    notify_absolute_motion(time_us: number, x: number, y: number): void;
    notify_button(
        time_us: number,
        button: number,
        button_state: ButtonState
    ): void;
    notify_discrete_scroll(
        time_us: number,
        direction: ScrollDirection,
        scroll_source: ScrollSource
    ): void;
    notify_key(time_us: number, key: number, key_state: KeyState): void;
    notify_keyval(time_us: number, keyval: number, key_state: KeyState): void;
    notify_relative_motion(time_us: number, dx: number, dy: number): void;
    notify_scroll_continuous(
        time_us: number,
        dx: number,
        dy: number,
        scroll_source: ScrollSource,
        finish_flags: ScrollFinishFlags
    ): void;
    notify_touch_down(
        time_us: number,
        slot: number,
        x: number,
        y: number
    ): void;
    notify_touch_motion(
        time_us: number,
        slot: number,
        x: number,
        y: number
    ): void;
    notify_touch_up(time_us: number, slot: number): void;
    vfunc_notify_absolute_motion(time_us: number, x: number, y: number): void;
    vfunc_notify_button(
        time_us: number,
        button: number,
        button_state: ButtonState
    ): void;
    vfunc_notify_discrete_scroll(
        time_us: number,
        direction: ScrollDirection,
        scroll_source: ScrollSource
    ): void;
    vfunc_notify_key(time_us: number, key: number, key_state: KeyState): void;
    vfunc_notify_keyval(
        time_us: number,
        keyval: number,
        key_state: KeyState
    ): void;
    vfunc_notify_relative_motion(time_us: number, dx: number, dy: number): void;
    vfunc_notify_scroll_continuous(
        time_us: number,
        dx: number,
        dy: number,
        scroll_source: ScrollSource,
        finish_flags: ScrollFinishFlags
    ): void;
    vfunc_notify_touch_down(
        time_us: number,
        slot: number,
        x: number,
        y: number
    ): void;
    vfunc_notify_touch_motion(
        time_us: number,
        slot: number,
        x: number,
        y: number
    ): void;
    vfunc_notify_touch_up(time_us: number, slot: number): void;
}
export namespace ZoomAction {
    export interface ConstructorProperties
        extends GestureAction.ConstructorProperties {
        [key: string]: any;
        zoom_axis: ZoomAxis;
        zoomAxis: ZoomAxis;
    }
}
export class ZoomAction extends GestureAction {
    static $gtype: GObject.GType<ZoomAction>;

    constructor(
        properties?: Partial<ZoomAction.ConstructorProperties>,
        ...args: any[]
    );
    _init(
        properties?: Partial<ZoomAction.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Properties
    zoom_axis: ZoomAxis;
    zoomAxis: ZoomAxis;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: 'zoom',
        callback: (
            _source: this,
            actor: Actor,
            focal_point: Graphene.Point,
            factor: number
        ) => boolean
    ): number;
    connect_after(
        signal: 'zoom',
        callback: (
            _source: this,
            actor: Actor,
            focal_point: Graphene.Point,
            factor: number
        ) => boolean
    ): number;
    emit(
        signal: 'zoom',
        actor: Actor,
        focal_point: Graphene.Point,
        factor: number
    ): void;

    // Constructors

    static ['new'](): ZoomAction;

    // Members

    get_focal_point(): Graphene.Point;
    get_transformed_focal_point(): Graphene.Point;
    get_zoom_axis(): ZoomAxis;
    set_zoom_axis(axis: ZoomAxis): void;
    vfunc_zoom(
        actor: Actor,
        focal_point: Graphene.Point,
        factor: number
    ): boolean;
}

export class ActorBox {
    static $gtype: GObject.GType<ActorBox>;

    constructor(x_1: number, y_1: number, x_2: number, y_2: number);
    constructor(
        properties?: Partial<{
            x1?: number;
            y1?: number;
            x2?: number;
            y2?: number;
        }>
    );
    constructor(copy: ActorBox);

    // Fields
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    // Constructors
    static ['new'](
        x_1: number,
        y_1: number,
        x_2: number,
        y_2: number
    ): ActorBox;

    // Members
    clamp_to_pixel(): void;
    contains(x: number, y: number): boolean;
    copy(): ActorBox;
    equal(box_b: ActorBox): boolean;
    free(): void;
    from_vertices(verts: Graphene.Point3D[]): void;
    get_area(): number;
    get_height(): number;
    get_origin(): [number | null, number | null];
    get_size(): [number | null, number | null];
    get_width(): number;
    get_x(): number;
    get_y(): number;
    init(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;
    init_rect(x: number, y: number, width: number, height: number): void;
    interpolate(_final: ActorBox, progress: number): ActorBox;
    is_initialized(): boolean;
    scale(scale: number): void;
    set_origin(x: number, y: number): void;
    set_size(width: number, height: number): void;
    union(b: ActorBox): ActorBox;
    static alloc(): ActorBox;
}

export class ActorIter {
    static $gtype: GObject.GType<ActorIter>;

    constructor(
        properties?: Partial<{
            dummy1?: any;
            dummy2?: any;
            dummy3?: any;
            dummy4?: number;
            dummy5?: any;
        }>
    );
    constructor(copy: ActorIter);

    // Fields
    dummy1: any;
    dummy2: any;
    dummy3: any;
    dummy4: number;
    dummy5: any;

    // Members
    destroy(): void;
    init(root: Actor): void;
    is_valid(): boolean;
    next(): [boolean, Actor];
    prev(): [boolean, Actor];
    remove(): void;
}

export class ActorMetaPrivate {
    static $gtype: GObject.GType<ActorMetaPrivate>;

    constructor(copy: ActorMetaPrivate);
}

export class ActorPrivate {
    static $gtype: GObject.GType<ActorPrivate>;

    constructor(copy: ActorPrivate);
}

export class AnyEvent {
    static $gtype: GObject.GType<AnyEvent>;

    constructor(copy: AnyEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
}

export class BinLayoutPrivate {
    static $gtype: GObject.GType<BinLayoutPrivate>;

    constructor(copy: BinLayoutPrivate);
}

export class BoxLayoutPrivate {
    static $gtype: GObject.GType<BoxLayoutPrivate>;

    constructor(copy: BoxLayoutPrivate);
}

export class ButtonEvent {
    static $gtype: GObject.GType<ButtonEvent>;

    constructor(copy: ButtonEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    modifier_state: ModifierType;
    button: number;
    click_count: number;
    axes: number;
    device: InputDevice;
}

export class CanvasPrivate {
    static $gtype: GObject.GType<CanvasPrivate>;

    constructor(copy: CanvasPrivate);
}

export class Capture {
    static $gtype: GObject.GType<Capture>;

    constructor(copy: Capture);

    // Fields
    image: cairo.Surface;
    rect: cairo.RectangleInt;
}

export class ClickActionPrivate {
    static $gtype: GObject.GType<ClickActionPrivate>;

    constructor(copy: ClickActionPrivate);
}

export class ClonePrivate {
    static $gtype: GObject.GType<ClonePrivate>;

    constructor(copy: ClonePrivate);
}

export class Color {
    static $gtype: GObject.GType<Color>;

    constructor();
    constructor(
        properties?: Partial<{
            red?: number;
            green?: number;
            blue?: number;
            alpha?: number;
        }>
    );
    constructor(copy: Color);

    // Fields
    red: number;
    green: number;
    blue: number;
    alpha: number;

    // Constructors
    static alloc(): Color;
    static ['new'](
        red: number,
        green: number,
        blue: number,
        alpha: number
    ): Color;

    // Members
    add(b: Color): Color;
    copy(): Color;
    darken(): Color;
    equal(v2: Color): boolean;
    free(): void;
    hash(): number;
    init(red: number, green: number, blue: number, alpha: number): Color;
    interpolate(_final: Color, progress: number): Color;
    lighten(): Color;
    shade(factor: number): Color;
    subtract(b: Color): Color;
    to_hls(): [number, number, number];
    to_pixel(): number;
    to_string(): string;
    static from_hls(hue: number, luminance: number, saturation: number): Color;
    static from_pixel(pixel: number): Color;
    static from_string(str: string): [boolean, Color];
    static get_static(color: StaticColor): Color;
}

export class CrossingEvent {
    static $gtype: GObject.GType<CrossingEvent>;

    constructor(copy: CrossingEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    device: InputDevice;
    sequence: EventSequence;
    related: Actor;
}

export class DeformEffectPrivate {
    static $gtype: GObject.GType<DeformEffectPrivate>;

    constructor(copy: DeformEffectPrivate);
}

export class DeviceEvent {
    static $gtype: GObject.GType<DeviceEvent>;

    constructor(copy: DeviceEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    device: InputDevice;
}

export class EventSequence {
    static $gtype: GObject.GType<EventSequence>;

    constructor(copy: EventSequence);
}

export class FlowLayoutPrivate {
    static $gtype: GObject.GType<FlowLayoutPrivate>;

    constructor(copy: FlowLayoutPrivate);
}

export class FrameListenerIface {
    static $gtype: GObject.GType<FrameListenerIface>;

    constructor(copy: FrameListenerIface);
}

export class GestureActionPrivate {
    static $gtype: GObject.GType<GestureActionPrivate>;

    constructor(copy: GestureActionPrivate);
}

export class GridLayoutPrivate {
    static $gtype: GObject.GType<GridLayoutPrivate>;

    constructor(copy: GridLayoutPrivate);
}

export class IMEvent {
    static $gtype: GObject.GType<IMEvent>;

    constructor(copy: IMEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    text: string;
    offset: number;
    len: number;
}

export class ImagePrivate {
    static $gtype: GObject.GType<ImagePrivate>;

    constructor(copy: ImagePrivate);
}

export class IntervalPrivate {
    static $gtype: GObject.GType<IntervalPrivate>;

    constructor(copy: IntervalPrivate);
}

export class KbdA11ySettings {
    static $gtype: GObject.GType<KbdA11ySettings>;

    constructor(copy: KbdA11ySettings);

    // Fields
    controls: KeyboardA11yFlags;
    slowkeys_delay: number;
    debounce_delay: number;
    timeout_delay: number;
    mousekeys_init_delay: number;
    mousekeys_max_speed: number;
    mousekeys_accel_time: number;
}

export class KeyEvent {
    static $gtype: GObject.GType<KeyEvent>;

    constructor(copy: KeyEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    modifier_state: ModifierType;
    keyval: number;
    hardware_keycode: number;
    unicode_value: number;
    device: InputDevice;
}

export class KeyframeTransitionPrivate {
    static $gtype: GObject.GType<KeyframeTransitionPrivate>;

    constructor(copy: KeyframeTransitionPrivate);
}

export class Knot {
    static $gtype: GObject.GType<Knot>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
        }>
    );
    constructor(copy: Knot);

    // Fields
    x: number;
    y: number;

    // Members
    copy(): Knot;
    equal(knot_b: Knot): boolean;
    free(): void;
}

export class Margin {
    static $gtype: GObject.GType<Margin>;

    constructor();
    constructor(
        properties?: Partial<{
            left?: number;
            right?: number;
            top?: number;
            bottom?: number;
        }>
    );
    constructor(copy: Margin);

    // Fields
    left: number;
    right: number;
    top: number;
    bottom: number;

    // Constructors
    static ['new'](): Margin;

    // Members
    copy(): Margin;
    free(): void;
}

export class MotionEvent {
    static $gtype: GObject.GType<MotionEvent>;

    constructor(copy: MotionEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    modifier_state: ModifierType;
    axes: number;
    device: InputDevice;
}

export class OffscreenEffectPrivate {
    static $gtype: GObject.GType<OffscreenEffectPrivate>;

    constructor(copy: OffscreenEffectPrivate);
}

export class PadButtonEvent {
    static $gtype: GObject.GType<PadButtonEvent>;

    constructor(copy: PadButtonEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    button: number;
    group: number;
    device: InputDevice;
    mode: number;
}

export class PadRingEvent {
    static $gtype: GObject.GType<PadRingEvent>;

    constructor(copy: PadRingEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    device: InputDevice;
    ring_source: InputDevicePadSource;
    ring_number: number;
    group: number;
    angle: number;
    mode: number;
}

export class PadStripEvent {
    static $gtype: GObject.GType<PadStripEvent>;

    constructor(copy: PadStripEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    device: InputDevice;
    strip_source: InputDevicePadSource;
    strip_number: number;
    group: number;
    value: number;
    mode: number;
}

export class PaintContext {
    static $gtype: GObject.GType<PaintContext>;

    constructor(copy: PaintContext);

    // Members
    destroy(): void;
    get_framebuffer(): Cogl.Framebuffer;
    get_redraw_clip(): cairo.Region;
    pop_framebuffer(): void;
    push_framebuffer(framebuffer: Cogl.Framebuffer): void;
    ref(): PaintContext;
    unref(): void;
}

export class PaintNodePrivate {
    static $gtype: GObject.GType<PaintNodePrivate>;

    constructor(copy: PaintNodePrivate);
}

export class PaintVolume {
    static $gtype: GObject.GType<PaintVolume>;

    constructor(copy: PaintVolume);

    // Members
    copy(): PaintVolume;
    free(): void;
    get_depth(): number;
    get_height(): number;
    get_origin(): Graphene.Point3D;
    get_width(): number;
    set_depth(depth: number): void;
    set_from_allocation(actor: Actor): boolean;
    set_height(height: number): void;
    set_origin(origin: Graphene.Point3D): void;
    set_width(width: number): void;
    union(another_pv: PaintVolume): void;
    union_box(box: ActorBox): void;
}

export class PanActionPrivate {
    static $gtype: GObject.GType<PanActionPrivate>;

    constructor(copy: PanActionPrivate);
}

export class PathNode {
    static $gtype: GObject.GType<PathNode>;

    constructor(copy: PathNode);

    // Fields
    type: PathNodeType;
    points: Knot[];

    // Members
    copy(): PathNode;
    equal(node_b: PathNode): boolean;
    free(): void;
}

export class PathPrivate {
    static $gtype: GObject.GType<PathPrivate>;

    constructor(copy: PathPrivate);
}

export class Perspective {
    static $gtype: GObject.GType<Perspective>;

    constructor(
        properties?: Partial<{
            fovy?: number;
            aspect?: number;
            z_near?: number;
            z_far?: number;
        }>
    );
    constructor(copy: Perspective);

    // Fields
    fovy: number;
    aspect: number;
    z_near: number;
    z_far: number;
}

export class PickContext {
    static $gtype: GObject.GType<PickContext>;

    constructor(copy: PickContext);

    // Members
    destroy(): void;
    ref(): PickContext;
    unref(): void;
}

export class PointerA11ySettings {
    static $gtype: GObject.GType<PointerA11ySettings>;

    constructor(copy: PointerA11ySettings);

    // Fields
    controls: PointerA11yFlags;
    dwell_click_type: PointerA11yDwellClickType;
    dwell_mode: PointerA11yDwellMode;
    dwell_gesture_single: PointerA11yDwellDirection;
    dwell_gesture_double: PointerA11yDwellDirection;
    dwell_gesture_drag: PointerA11yDwellDirection;
    dwell_gesture_secondary: PointerA11yDwellDirection;
    secondary_click_delay: number;
    dwell_delay: number;
    dwell_threshold: number;
}

export class PropertyTransitionPrivate {
    static $gtype: GObject.GType<PropertyTransitionPrivate>;

    constructor(copy: PropertyTransitionPrivate);
}

export class ProximityEvent {
    static $gtype: GObject.GType<ProximityEvent>;

    constructor(copy: ProximityEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    device: InputDevice;
}

export class RotateActionPrivate {
    static $gtype: GObject.GType<RotateActionPrivate>;

    constructor(copy: RotateActionPrivate);
}

export class ScriptPrivate {
    static $gtype: GObject.GType<ScriptPrivate>;

    constructor(copy: ScriptPrivate);
}

export class ScrollActorPrivate {
    static $gtype: GObject.GType<ScrollActorPrivate>;

    constructor(copy: ScrollActorPrivate);
}

export class ScrollEvent {
    static $gtype: GObject.GType<ScrollEvent>;

    constructor(copy: ScrollEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    direction: ScrollDirection;
    modifier_state: ModifierType;
    axes: number;
    device: InputDevice;
    scroll_source: ScrollSource;
    finish_flags: ScrollFinishFlags;
}

export class Shader {
    static $gtype: GObject.GType<Shader>;

    constructor(copy: Shader);
}

export class ShaderEffectPrivate {
    static $gtype: GObject.GType<ShaderEffectPrivate>;

    constructor(copy: ShaderEffectPrivate);
}

export class StagePrivate {
    static $gtype: GObject.GType<StagePrivate>;

    constructor(copy: StagePrivate);
}

export class StageStateEvent {
    static $gtype: GObject.GType<StageStateEvent>;

    constructor(copy: StageStateEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    changed_mask: StageState;
    new_state: StageState;
}

export class SwipeActionPrivate {
    static $gtype: GObject.GType<SwipeActionPrivate>;

    constructor(copy: SwipeActionPrivate);
}

export class TapActionPrivate {
    static $gtype: GObject.GType<TapActionPrivate>;

    constructor(copy: TapActionPrivate);
}

export class TextBufferPrivate {
    static $gtype: GObject.GType<TextBufferPrivate>;

    constructor(copy: TextBufferPrivate);
}

export class TextPrivate {
    static $gtype: GObject.GType<TextPrivate>;

    constructor(copy: TextPrivate);
}

export class TimelinePrivate {
    static $gtype: GObject.GType<TimelinePrivate>;

    constructor(copy: TimelinePrivate);
}

export class TouchEvent {
    static $gtype: GObject.GType<TouchEvent>;

    constructor(copy: TouchEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    sequence: EventSequence;
    modifier_state: ModifierType;
    axes: number;
    device: InputDevice;
}

export class TouchpadPinchEvent {
    static $gtype: GObject.GType<TouchpadPinchEvent>;

    constructor(copy: TouchpadPinchEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    phase: TouchpadGesturePhase;
    x: number;
    y: number;
    dx: number;
    dy: number;
    angle_delta: number;
    scale: number;
    n_fingers: number;
}

export class TouchpadSwipeEvent {
    static $gtype: GObject.GType<TouchpadSwipeEvent>;

    constructor(copy: TouchpadSwipeEvent);

    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    phase: TouchpadGesturePhase;
    n_fingers: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
}

export class TransitionGroupPrivate {
    static $gtype: GObject.GType<TransitionGroupPrivate>;

    constructor(copy: TransitionGroupPrivate);
}

export class TransitionPrivate {
    static $gtype: GObject.GType<TransitionPrivate>;

    constructor(copy: TransitionPrivate);
}

export class Units {
    static $gtype: GObject.GType<Units>;

    constructor(copy: Units);

    // Fields
    unit_type: UnitType;
    value: number;
    pixels: number;
    pixels_set: number;
    serial: number;

    // Members
    copy(): Units;
    free(): void;
    get_unit_type(): UnitType;
    get_unit_value(): number;
    to_pixels(): number;
    to_string(): string;
    static from_cm(cm: number): Units;
    static from_em(em: number): Units;
    static from_em_for_font(font_name: string | null, em: number): Units;
    static from_mm(mm: number): Units;
    static from_pixels(px: number): Units;
    static from_pt(pt: number): Units;
    static from_string(str: string): [boolean, Units];
}

export class ZoomActionPrivate {
    static $gtype: GObject.GType<ZoomActionPrivate>;

    constructor(copy: ZoomActionPrivate);
}

export class Event {
    static $gtype: GObject.GType<Event>;

    constructor(type: EventType);
    constructor(copy: Event);

    // Fields
    any: AnyEvent;
    button: ButtonEvent;
    key: KeyEvent;
    motion: MotionEvent;
    scroll: ScrollEvent;
    stage_state: StageStateEvent;
    crossing: CrossingEvent;
    touch: TouchEvent;
    touchpad_pinch: TouchpadPinchEvent;
    touchpad_swipe: TouchpadSwipeEvent;
    proximity: ProximityEvent;
    pad_button: PadButtonEvent;
    pad_strip: PadStripEvent;
    pad_ring: PadRingEvent;
    device: DeviceEvent;
    im: IMEvent;

    // Constructors
    static ['new'](type: EventType): Event;

    // Members
    copy(): Event;
    free(): void;
    get_angle(target: Event): number;
    get_axes(): [number, number];
    get_button(): number;
    get_click_count(): number;
    get_coords(): [number, number];
    get_device(): InputDevice;
    get_device_id(): number;
    get_device_tool(): InputDeviceTool;
    get_device_type(): InputDeviceType;
    get_distance(target: Event): number;
    get_event_sequence(): EventSequence;
    get_flags(): EventFlags;
    get_gesture_motion_delta(): [number | null, number | null];
    get_gesture_phase(): TouchpadGesturePhase;
    get_gesture_pinch_angle_delta(): number;
    get_gesture_pinch_scale(): number;
    get_key_code(): number;
    get_key_symbol(): number;
    get_key_unicode(): number;
    get_mode_group(): number;
    get_pad_event_details(): [
        boolean,
        number | null,
        number | null,
        number | null
    ];
    get_position(position: Graphene.Point): void;
    get_related(): Actor;
    get_scroll_delta(): [number, number];
    get_scroll_direction(): ScrollDirection;
    get_scroll_finish_flags(): ScrollFinishFlags;
    get_scroll_source(): ScrollSource;
    get_source(): Actor;
    get_source_device(): InputDevice;
    get_stage(): Stage;
    get_state(): ModifierType;
    get_state_full(): [
        ModifierType | null,
        ModifierType | null,
        ModifierType | null,
        ModifierType | null,
        ModifierType | null
    ];
    get_time(): number;
    get_touchpad_gesture_finger_count(): number;
    has_control_modifier(): boolean;
    has_shift_modifier(): boolean;
    is_pointer_emulated(): boolean;
    put(): void;
    set_button(button: number): void;
    set_coords(x: number, y: number): void;
    set_device(device?: InputDevice | null): void;
    set_device_tool(tool?: InputDeviceTool | null): void;
    set_flags(flags: EventFlags): void;
    set_key_code(key_code: number): void;
    set_key_symbol(key_sym: number): void;
    set_key_unicode(key_unicode: number): void;
    set_related(actor?: Actor | null): void;
    set_scroll_delta(dx: number, dy: number): void;
    set_scroll_direction(direction: ScrollDirection): void;
    set_source(actor?: Actor | null): void;
    set_source_device(device?: InputDevice | null): void;
    set_stage(stage?: Stage | null): void;
    set_state(state: ModifierType): void;
    set_time(time_: number): void;
    type(): EventType;
    static add_filter(stage: Stage | null, func: EventFilterFunc): number;
    static get(): Event;
    static peek(): Event;
    static remove_filter(id: number): void;
}

export interface AnimatableNamespace {
    $gtype: GObject.GType<Animatable>;
    prototype: AnimatablePrototype;
}
export type Animatable = AnimatablePrototype;
export interface AnimatablePrototype extends GObject.Object {
    // Members

    find_property(property_name: string): GObject.ParamSpec;
    get_actor(): Actor;
    get_initial_state(property_name: string, value: any): void;
    interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    set_final_state(property_name: string, value: any): void;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_actor(): Actor;
    vfunc_get_initial_state(property_name: string, value: any): void;
    vfunc_interpolate_value(
        property_name: string,
        interval: Interval,
        progress: number
    ): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: any): void;
}

export const Animatable: AnimatableNamespace;

export interface ContainerNamespace {
    $gtype: GObject.GType<Container>;
    prototype: ContainerPrototype;

    class_find_child_property(
        klass: GObject.Object,
        property_name: string
    ): GObject.ParamSpec;
    class_list_child_properties(klass: GObject.Object): GObject.ParamSpec[];
}
export type Container<A extends Actor = Actor> = ContainerPrototype<A>;
export interface ContainerPrototype<A extends Actor = Actor>
    extends GObject.Object {
    // Members

    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): ChildMeta;
    get_children(): A[];
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
}

export const Container: ContainerNamespace;

export interface ContentNamespace {
    $gtype: GObject.GType<Content>;
    prototype: ContentPrototype;
}
export type Content = ContentPrototype;
export interface ContentPrototype extends GObject.Object {
    // Members

    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    invalidate_size(): void;
    vfunc_attached(actor: Actor): void;
    vfunc_detached(actor: Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_invalidate_size(): void;
    vfunc_paint_content(
        actor: Actor,
        node: PaintNode,
        paint_context: PaintContext
    ): void;
}

export const Content: ContentNamespace;

export interface ScriptableNamespace {
    $gtype: GObject.GType<Scriptable>;
    prototype: ScriptablePrototype;
}
export type Scriptable = ScriptablePrototype;
export interface ScriptablePrototype extends GObject.Object {
    // Members

    get_id(): string;
    parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    set_custom_property(script: Script, name: string, value: any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(
        script: Script,
        value: any,
        name: string,
        node: Json.Node
    ): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: any): void;
    vfunc_set_id(id_: string): void;
}

export const Scriptable: ScriptableNamespace;

export type Matrix = Cogl.Matrix;
