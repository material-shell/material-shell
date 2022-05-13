/**
 * Gdk 4.0
 *
 * Generated from 4.0
 */

import * as GdkPixbuf from "@gi-types/gdkpixbuf";
import * as Gio from "@gi-types/gio";
import * as Graphene from "@gi-types/graphene";
import * as Pango from "@gi-types/pango";
import * as cairo from "@gi-types/cairo";
import * as GObject from "@gi-types/gobject";
import * as GLib from "@gi-types/glib";

export const ACTION_ALL: number;
export const BUTTON_MIDDLE: number;
export const BUTTON_PRIMARY: number;
export const BUTTON_SECONDARY: number;
export const CURRENT_TIME: number;
export const EVENT_PROPAGATE: boolean;
export const EVENT_STOP: boolean;
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
export const KEY_AudioPreset: number;
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
export const KEY_Keyboard: number;
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
export const KEY_RFKill: number;
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
export const KEY_WWAN: number;
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
export const MODIFIER_MASK: number;
export const PRIORITY_REDRAW: number;
export function cairo_draw_from_gl(
    cr: cairo.Context,
    surface: Surface,
    source: number,
    source_type: number,
    buffer_scale: number,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;
export function cairo_region(cr: cairo.Context, region: cairo.Region): void;
export function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region;
export function cairo_set_source_pixbuf(
    cr: cairo.Context,
    pixbuf: GdkPixbuf.Pixbuf,
    pixbuf_x: number,
    pixbuf_y: number
): void;
export function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void;
export function content_deserialize_async(
    stream: Gio.InputStream,
    mime_type: string,
    type: GObject.GType,
    io_priority: number,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function content_deserialize_async(
    stream: Gio.InputStream,
    mime_type: string,
    type: GObject.GType,
    io_priority: number,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Gio.InputStream> | null
): void;
export function content_deserialize_async(
    stream: Gio.InputStream,
    mime_type: string,
    type: GObject.GType,
    io_priority: number,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Gio.InputStream> | null
): Promise<boolean> | void;
export function content_deserialize_finish(result: Gio.AsyncResult, value: any): boolean;
export function content_register_deserializer(
    mime_type: string,
    type: GObject.GType,
    deserialize: ContentDeserializeFunc
): void;
export function content_register_serializer(
    type: GObject.GType,
    mime_type: string,
    serialize: ContentSerializeFunc
): void;
export function content_serialize_async(
    stream: Gio.OutputStream,
    mime_type: string,
    value: any,
    io_priority: number,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function content_serialize_async(
    stream: Gio.OutputStream,
    mime_type: string,
    value: any,
    io_priority: number,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Gio.OutputStream> | null
): void;
export function content_serialize_async(
    stream: Gio.OutputStream,
    mime_type: string,
    value: any,
    io_priority: number,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Gio.OutputStream> | null
): Promise<boolean> | void;
export function content_serialize_finish(result: Gio.AsyncResult): boolean;
export function drag_action_is_unique(action: DragAction): boolean;
export function events_get_angle(event1: Event, event2: Event): [boolean, number];
export function events_get_center(event1: Event, event2: Event): [boolean, number, number];
export function events_get_distance(event1: Event, event2: Event): [boolean, number];
export function gl_error_quark(): GLib.Quark;
export function intern_mime_type(string: string): string;
export function keyval_convert_case(symbol: number): [number, number];
export function keyval_from_name(keyval_name: string): number;
export function keyval_is_lower(keyval: number): boolean;
export function keyval_is_upper(keyval: number): boolean;
export function keyval_name(keyval: number): string | null;
export function keyval_to_lower(keyval: number): number;
export function keyval_to_unicode(keyval: number): number;
export function keyval_to_upper(keyval: number): number;
export function paintable_new_empty(intrinsic_width: number, intrinsic_height: number): Paintable;
export function pixbuf_get_from_surface(
    surface: cairo.Surface,
    src_x: number,
    src_y: number,
    width: number,
    height: number
): GdkPixbuf.Pixbuf | null;
export function pixbuf_get_from_texture(texture: Texture): GdkPixbuf.Pixbuf | null;
export function set_allowed_backends(backends: string): void;
export function toplevel_size_get_type(): GObject.GType;
export function unicode_to_keyval(wc: number): number;
export function vulkan_error_quark(): GLib.Quark;
export type ContentDeserializeFunc = (deserializer: ContentDeserializer) => void;
export type ContentSerializeFunc = (serializer: ContentSerializer) => void;
export type FileList = object | null;

export namespace AxisUse {
    export const $gtype: GObject.GType<AxisUse>;
}

export enum AxisUse {
    IGNORE = 0,
    X = 1,
    Y = 2,
    DELTA_X = 3,
    DELTA_Y = 4,
    PRESSURE = 5,
    XTILT = 6,
    YTILT = 7,
    WHEEL = 8,
    DISTANCE = 9,
    ROTATION = 10,
    SLIDER = 11,
    LAST = 12,
}

export namespace CrossingMode {
    export const $gtype: GObject.GType<CrossingMode>;
}

export enum CrossingMode {
    NORMAL = 0,
    GRAB = 1,
    UNGRAB = 2,
    GTK_GRAB = 3,
    GTK_UNGRAB = 4,
    STATE_CHANGED = 5,
    TOUCH_BEGIN = 6,
    TOUCH_END = 7,
    DEVICE_SWITCH = 8,
}

export namespace DevicePadFeature {
    export const $gtype: GObject.GType<DevicePadFeature>;
}

export enum DevicePadFeature {
    BUTTON = 0,
    RING = 1,
    STRIP = 2,
}

export namespace DeviceToolType {
    export const $gtype: GObject.GType<DeviceToolType>;
}

export enum DeviceToolType {
    UNKNOWN = 0,
    PEN = 1,
    ERASER = 2,
    BRUSH = 3,
    PENCIL = 4,
    AIRBRUSH = 5,
    MOUSE = 6,
    LENS = 7,
}

export namespace DragCancelReason {
    export const $gtype: GObject.GType<DragCancelReason>;
}

export enum DragCancelReason {
    NO_TARGET = 0,
    USER_CANCELLED = 1,
    ERROR = 2,
}

export namespace EventType {
    export const $gtype: GObject.GType<EventType>;
}

export enum EventType {
    DELETE = 0,
    MOTION_NOTIFY = 1,
    BUTTON_PRESS = 2,
    BUTTON_RELEASE = 3,
    KEY_PRESS = 4,
    KEY_RELEASE = 5,
    ENTER_NOTIFY = 6,
    LEAVE_NOTIFY = 7,
    FOCUS_CHANGE = 8,
    PROXIMITY_IN = 9,
    PROXIMITY_OUT = 10,
    DRAG_ENTER = 11,
    DRAG_LEAVE = 12,
    DRAG_MOTION = 13,
    DROP_START = 14,
    SCROLL = 15,
    GRAB_BROKEN = 16,
    TOUCH_BEGIN = 17,
    TOUCH_UPDATE = 18,
    TOUCH_END = 19,
    TOUCH_CANCEL = 20,
    TOUCHPAD_SWIPE = 21,
    TOUCHPAD_PINCH = 22,
    PAD_BUTTON_PRESS = 23,
    PAD_BUTTON_RELEASE = 24,
    PAD_RING = 25,
    PAD_STRIP = 26,
    PAD_GROUP_MODE = 27,
    EVENT_LAST = 28,
}

export namespace FullscreenMode {
    export const $gtype: GObject.GType<FullscreenMode>;
}

export enum FullscreenMode {
    CURRENT_MONITOR = 0,
    ALL_MONITORS = 1,
}

export class GLError extends GLib.Error {
    static $gtype: GObject.GType<GLError>;

    constructor(options: { message: string; code: number });
    constructor(copy: GLError);

    // Properties
    static NOT_AVAILABLE: number;
    static UNSUPPORTED_FORMAT: number;
    static UNSUPPORTED_PROFILE: number;
    static COMPILATION_FAILED: number;
    static LINK_FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Gravity {
    export const $gtype: GObject.GType<Gravity>;
}

export enum Gravity {
    NORTH_WEST = 1,
    NORTH = 2,
    NORTH_EAST = 3,
    WEST = 4,
    CENTER = 5,
    EAST = 6,
    SOUTH_WEST = 7,
    SOUTH = 8,
    SOUTH_EAST = 9,
    STATIC = 10,
}

export namespace InputSource {
    export const $gtype: GObject.GType<InputSource>;
}

export enum InputSource {
    MOUSE = 0,
    PEN = 1,
    KEYBOARD = 2,
    TOUCHSCREEN = 3,
    TOUCHPAD = 4,
    TRACKPOINT = 5,
    TABLET_PAD = 6,
}

export namespace KeyMatch {
    export const $gtype: GObject.GType<KeyMatch>;
}

export enum KeyMatch {
    NONE = 0,
    PARTIAL = 1,
    EXACT = 2,
}

export namespace MemoryFormat {
    export const $gtype: GObject.GType<MemoryFormat>;
}

export enum MemoryFormat {
    B8G8R8A8_PREMULTIPLIED = 0,
    A8R8G8B8_PREMULTIPLIED = 1,
    R8G8B8A8_PREMULTIPLIED = 2,
    B8G8R8A8 = 3,
    A8R8G8B8 = 4,
    R8G8B8A8 = 5,
    A8B8G8R8 = 6,
    R8G8B8 = 7,
    B8G8R8 = 8,
    N_FORMATS = 9,
}

export namespace NotifyType {
    export const $gtype: GObject.GType<NotifyType>;
}

export enum NotifyType {
    ANCESTOR = 0,
    VIRTUAL = 1,
    INFERIOR = 2,
    NONLINEAR = 3,
    NONLINEAR_VIRTUAL = 4,
    UNKNOWN = 5,
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

export namespace SubpixelLayout {
    export const $gtype: GObject.GType<SubpixelLayout>;
}

export enum SubpixelLayout {
    UNKNOWN = 0,
    NONE = 1,
    HORIZONTAL_RGB = 2,
    HORIZONTAL_BGR = 3,
    VERTICAL_RGB = 4,
    VERTICAL_BGR = 5,
}

export namespace SurfaceEdge {
    export const $gtype: GObject.GType<SurfaceEdge>;
}

export enum SurfaceEdge {
    NORTH_WEST = 0,
    NORTH = 1,
    NORTH_EAST = 2,
    WEST = 3,
    EAST = 4,
    SOUTH_WEST = 5,
    SOUTH = 6,
    SOUTH_EAST = 7,
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

export class VulkanError extends GLib.Error {
    static $gtype: GObject.GType<VulkanError>;

    constructor(options: { message: string; code: number });
    constructor(copy: VulkanError);

    // Properties
    static UNSUPPORTED: number;
    static NOT_AVAILABLE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace AnchorHints {
    export const $gtype: GObject.GType<AnchorHints>;
}

export enum AnchorHints {
    FLIP_X = 1,
    FLIP_Y = 2,
    SLIDE_X = 4,
    SLIDE_Y = 8,
    RESIZE_X = 16,
    RESIZE_Y = 32,
    FLIP = 3,
    SLIDE = 12,
    RESIZE = 48,
}

export namespace AxisFlags {
    export const $gtype: GObject.GType<AxisFlags>;
}

export enum AxisFlags {
    X = 2,
    Y = 4,
    DELTA_X = 8,
    DELTA_Y = 16,
    PRESSURE = 32,
    XTILT = 64,
    YTILT = 128,
    WHEEL = 256,
    DISTANCE = 512,
    ROTATION = 1024,
    SLIDER = 2048,
}

export namespace DragAction {
    export const $gtype: GObject.GType<DragAction>;
}

export enum DragAction {
    COPY = 1,
    MOVE = 2,
    LINK = 4,
    ASK = 8,
}

export namespace FrameClockPhase {
    export const $gtype: GObject.GType<FrameClockPhase>;
}

export enum FrameClockPhase {
    NONE = 0,
    FLUSH_EVENTS = 1,
    BEFORE_PAINT = 2,
    UPDATE = 4,
    LAYOUT = 8,
    PAINT = 16,
    RESUME_EVENTS = 32,
    AFTER_PAINT = 64,
}

export namespace ModifierType {
    export const $gtype: GObject.GType<ModifierType>;
}

export enum ModifierType {
    SHIFT_MASK = 1,
    LOCK_MASK = 2,
    CONTROL_MASK = 4,
    ALT_MASK = 8,
    BUTTON1_MASK = 256,
    BUTTON2_MASK = 512,
    BUTTON3_MASK = 1024,
    BUTTON4_MASK = 2048,
    BUTTON5_MASK = 4096,
    SUPER_MASK = 67108864,
    HYPER_MASK = 134217728,
    META_MASK = 268435456,
}

export namespace PaintableFlags {
    export const $gtype: GObject.GType<PaintableFlags>;
}

export enum PaintableFlags {
    SIZE = 1,
    CONTENTS = 2,
}

export namespace SeatCapabilities {
    export const $gtype: GObject.GType<SeatCapabilities>;
}

export enum SeatCapabilities {
    NONE = 0,
    POINTER = 1,
    TOUCH = 2,
    TABLET_STYLUS = 4,
    KEYBOARD = 8,
    TABLET_PAD = 16,
    ALL_POINTING = 7,
    ALL = 15,
}

export namespace ToplevelState {
    export const $gtype: GObject.GType<ToplevelState>;
}

export enum ToplevelState {
    MINIMIZED = 1,
    MAXIMIZED = 2,
    STICKY = 4,
    FULLSCREEN = 8,
    ABOVE = 16,
    BELOW = 32,
    FOCUSED = 64,
    TILED = 128,
    TOP_TILED = 256,
    TOP_RESIZABLE = 512,
    RIGHT_TILED = 1024,
    RIGHT_RESIZABLE = 2048,
    BOTTOM_TILED = 4096,
    BOTTOM_RESIZABLE = 8192,
    LEFT_TILED = 16384,
    LEFT_RESIZABLE = 32768,
}
export module AppLaunchContext {
    export interface ConstructorProperties extends Gio.AppLaunchContext.ConstructorProperties {
        [key: string]: any;
        display: Display;
    }
}
export class AppLaunchContext extends Gio.AppLaunchContext {
    static $gtype: GObject.GType<AppLaunchContext>;

    constructor(properties?: Partial<AppLaunchContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppLaunchContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    display: Display;

    // Members

    get_display(): Display;
    get_display(...args: never[]): never;
    set_desktop(desktop: number): void;
    set_icon(icon?: Gio.Icon | null): void;
    set_icon_name(icon_name?: string | null): void;
    set_timestamp(timestamp: number): void;
}
export module ButtonEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class ButtonEvent extends Event {
    static $gtype: GObject.GType<ButtonEvent>;

    constructor(properties?: Partial<ButtonEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ButtonEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_button(): number;
}
export module CairoContext {
    export interface ConstructorProperties extends DrawContext.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class CairoContext extends DrawContext {
    static $gtype: GObject.GType<CairoContext>;

    constructor(properties?: Partial<CairoContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CairoContext.ConstructorProperties>, ...args: any[]): void;

    // Members

    cairo_create(): cairo.Context | null;
}
export module Clipboard {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        content: ContentProvider;
        display: Display;
        formats: ContentFormats;
        local: boolean;
    }
}
export class Clipboard extends GObject.Object {
    static $gtype: GObject.GType<Clipboard>;

    constructor(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content: ContentProvider;
    display: Display;
    formats: ContentFormats;
    local: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Members

    get_content(): ContentProvider | null;
    get_display(): Display;
    get_formats(): ContentFormats;
    is_local(): boolean;
    read_async(
        mime_types: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<[Gio.InputStream | null, string | null]>;
    read_async(
        mime_types: string,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    read_async(
        mime_types: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Gio.InputStream | null, string | null]> | void;
    read_finish(result: Gio.AsyncResult): [Gio.InputStream | null, string | null];
    read_text_async(cancellable?: Gio.Cancellable | null): Promise<string | null>;
    read_text_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    read_text_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string | null> | void;
    read_text_finish(result: Gio.AsyncResult): string | null;
    read_texture_async(cancellable?: Gio.Cancellable | null): Promise<Texture | null>;
    read_texture_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    read_texture_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Texture | null> | void;
    read_texture_finish(result: Gio.AsyncResult): Texture | null;
    read_value_async(
        type: GObject.GType,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<GObject.Value>;
    read_value_async(
        type: GObject.GType,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    read_value_async(
        type: GObject.GType,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GObject.Value> | void;
    read_value_finish(result: Gio.AsyncResult): unknown;
    set_content(provider?: ContentProvider | null): boolean;
    set(value: any): void;
    set(...args: never[]): never;
    store_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    store_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    store_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    store_finish(result: Gio.AsyncResult): boolean;
}
export module ContentDeserializer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContentDeserializer extends GObject.Object implements Gio.AsyncResult {
    static $gtype: GObject.GType<ContentDeserializer>;

    constructor(properties?: Partial<ContentDeserializer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContentDeserializer.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_cancellable(): Gio.Cancellable;
    get_gtype(): GObject.GType;
    get_input_stream(): Gio.InputStream;
    get_mime_type(): string;
    get_priority(): number;
    get_task_data(): any | null;
    get_user_data(): any | null;
    get_value(): unknown;
    return_error(error: GLib.Error): void;
    return_success(): void;
    set_task_data(data?: any | null): void;

    // Implemented Members

    get_source_object<T = GObject.Object>(): T;
    is_tagged(source_tag?: any | null): boolean;
    legacy_propagate_error(): boolean;
    vfunc_get_source_object<T = GObject.Object>(): T;
    vfunc_get_user_data(): any | null;
    vfunc_is_tagged(source_tag?: any | null): boolean;
}
export module ContentProvider {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        formats: ContentFormats;
        storable_formats: ContentFormats;
        storableFormats: ContentFormats;
    }
}
export class ContentProvider extends GObject.Object {
    static $gtype: GObject.GType<ContentProvider>;

    constructor(properties?: Partial<ContentProvider.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContentProvider.ConstructorProperties>, ...args: any[]): void;

    // Properties
    formats: ContentFormats;
    storable_formats: ContentFormats;
    storableFormats: ContentFormats;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "content-changed", callback: (_source: this) => void): number;
    connect_after(signal: "content-changed", callback: (_source: this) => void): number;
    emit(signal: "content-changed"): void;

    // Constructors

    static new_for_bytes(mime_type: string, bytes: GLib.Bytes | Uint8Array): ContentProvider;
    static new_for_value(value: any): ContentProvider;
    static new_union(providers?: ContentProvider[] | null): ContentProvider;

    // Members

    content_changed(): void;
    get_value(value: any): boolean;
    ref_formats(): ContentFormats;
    ref_storable_formats(): ContentFormats;
    write_mime_type_async(
        mime_type: string,
        stream: Gio.OutputStream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    write_mime_type_async(
        mime_type: string,
        stream: Gio.OutputStream,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    write_mime_type_async(
        mime_type: string,
        stream: Gio.OutputStream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    write_mime_type_finish(result: Gio.AsyncResult): boolean;
    vfunc_attach_clipboard(clipboard: Clipboard): void;
    vfunc_content_changed(): void;
    vfunc_detach_clipboard(clipboard: Clipboard): void;
    vfunc_get_value(value: any): boolean;
    vfunc_ref_formats(): ContentFormats;
    vfunc_ref_storable_formats(): ContentFormats;
    vfunc_write_mime_type_async(
        mime_type: string,
        stream: Gio.OutputStream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    vfunc_write_mime_type_async(
        mime_type: string,
        stream: Gio.OutputStream,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_write_mime_type_async(
        mime_type: string,
        stream: Gio.OutputStream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_write_mime_type_finish(result: Gio.AsyncResult): boolean;
}
export module ContentSerializer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContentSerializer extends GObject.Object implements Gio.AsyncResult {
    static $gtype: GObject.GType<ContentSerializer>;

    constructor(properties?: Partial<ContentSerializer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContentSerializer.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_cancellable(): Gio.Cancellable;
    get_gtype(): GObject.GType;
    get_mime_type(): string;
    get_output_stream(): Gio.OutputStream;
    get_priority(): number;
    get_task_data(): any | null;
    get_user_data(): any | null;
    get_value(): unknown;
    return_error(error: GLib.Error): void;
    return_success(): void;
    set_task_data(data?: any | null): void;

    // Implemented Members

    get_source_object<T = GObject.Object>(): T;
    is_tagged(source_tag?: any | null): boolean;
    legacy_propagate_error(): boolean;
    vfunc_get_source_object<T = GObject.Object>(): T;
    vfunc_get_user_data(): any | null;
    vfunc_is_tagged(source_tag?: any | null): boolean;
}
export module CrossingEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class CrossingEvent extends Event {
    static $gtype: GObject.GType<CrossingEvent>;

    constructor(properties?: Partial<CrossingEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CrossingEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_detail(): NotifyType;
    get_focus(): boolean;
    get_mode(): CrossingMode;
}
export module Cursor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        fallback: Cursor;
        hotspot_x: number;
        hotspotX: number;
        hotspot_y: number;
        hotspotY: number;
        name: string;
        texture: Texture;
    }
}
export class Cursor extends GObject.Object {
    static $gtype: GObject.GType<Cursor>;

    constructor(properties?: Partial<Cursor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Cursor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fallback: Cursor;
    hotspot_x: number;
    hotspotX: number;
    hotspot_y: number;
    hotspotY: number;
    name: string;
    texture: Texture;

    // Constructors

    static new_from_name(name: string, fallback?: Cursor | null): Cursor;
    static new_from_texture(texture: Texture, hotspot_x: number, hotspot_y: number, fallback?: Cursor | null): Cursor;

    // Members

    get_fallback(): Cursor | null;
    get_hotspot_x(): number;
    get_hotspot_y(): number;
    get_name(): string | null;
    get_texture(): Texture | null;
}
export module DNDEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class DNDEvent extends Event {
    static $gtype: GObject.GType<DNDEvent>;

    constructor(properties?: Partial<DNDEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DNDEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_drop(): Drop | null;
}
export module DeleteEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeleteEvent extends Event {
    static $gtype: GObject.GType<DeleteEvent>;

    constructor(properties?: Partial<DeleteEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeleteEvent.ConstructorProperties>, ...args: any[]): void;
}
export module Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        caps_lock_state: boolean;
        capsLockState: boolean;
        direction: Pango.Direction;
        display: Display;
        has_bidi_layouts: boolean;
        hasBidiLayouts: boolean;
        has_cursor: boolean;
        hasCursor: boolean;
        modifier_state: ModifierType;
        modifierState: ModifierType;
        n_axes: number;
        nAxes: number;
        name: string;
        num_lock_state: boolean;
        numLockState: boolean;
        num_touches: number;
        numTouches: number;
        product_id: string;
        productId: string;
        scroll_lock_state: boolean;
        scrollLockState: boolean;
        seat: Seat;
        source: InputSource;
        tool: DeviceTool;
        vendor_id: string;
        vendorId: string;
    }
}
export abstract class Device extends GObject.Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    caps_lock_state: boolean;
    capsLockState: boolean;
    direction: Pango.Direction;
    display: Display;
    has_bidi_layouts: boolean;
    hasBidiLayouts: boolean;
    has_cursor: boolean;
    hasCursor: boolean;
    modifier_state: ModifierType;
    modifierState: ModifierType;
    n_axes: number;
    nAxes: number;
    name: string;
    num_lock_state: boolean;
    numLockState: boolean;
    num_touches: number;
    numTouches: number;
    product_id: string;
    productId: string;
    scroll_lock_state: boolean;
    scrollLockState: boolean;
    seat: Seat;
    source: InputSource;
    tool: DeviceTool;
    vendor_id: string;
    vendorId: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "tool-changed", callback: (_source: this, tool: DeviceTool) => void): number;
    connect_after(signal: "tool-changed", callback: (_source: this, tool: DeviceTool) => void): number;
    emit(signal: "tool-changed", tool: DeviceTool): void;

    // Members

    get_caps_lock_state(): boolean;
    get_device_tool(): DeviceTool;
    get_direction(): Pango.Direction;
    get_display(): Display;
    get_has_cursor(): boolean;
    get_modifier_state(): ModifierType;
    get_name(): string;
    get_num_lock_state(): boolean;
    get_num_touches(): number;
    get_product_id(): string | null;
    get_scroll_lock_state(): boolean;
    get_seat(): Seat;
    get_source(): InputSource;
    get_surface_at_position(): [Surface | null, number | null, number | null];
    get_vendor_id(): string | null;
}
export module DeviceTool {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        axes: AxisFlags;
        hardware_id: number;
        hardwareId: number;
        serial: number;
        tool_type: DeviceToolType;
        toolType: DeviceToolType;
    }
}
export class DeviceTool extends GObject.Object {
    static $gtype: GObject.GType<DeviceTool>;

    constructor(properties?: Partial<DeviceTool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceTool.ConstructorProperties>, ...args: any[]): void;

    // Properties
    axes: AxisFlags;
    hardware_id: number;
    hardwareId: number;
    serial: number;
    tool_type: DeviceToolType;
    toolType: DeviceToolType;

    // Members

    get_axes(): AxisFlags;
    get_hardware_id(): number;
    get_serial(): number;
    get_tool_type(): DeviceToolType;
}
export module Display {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        composited: boolean;
        input_shapes: boolean;
        inputShapes: boolean;
        rgba: boolean;
    }
}
export class Display extends GObject.Object {
    static $gtype: GObject.GType<Display>;

    constructor(properties?: Partial<Display.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Display.ConstructorProperties>, ...args: any[]): void;

    // Properties
    composited: boolean;
    input_shapes: boolean;
    inputShapes: boolean;
    rgba: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "closed", callback: (_source: this, is_error: boolean) => void): number;
    connect_after(signal: "closed", callback: (_source: this, is_error: boolean) => void): number;
    emit(signal: "closed", is_error: boolean): void;
    connect(signal: "opened", callback: (_source: this) => void): number;
    connect_after(signal: "opened", callback: (_source: this) => void): number;
    emit(signal: "opened"): void;
    connect(signal: "seat-added", callback: (_source: this, seat: Seat) => void): number;
    connect_after(signal: "seat-added", callback: (_source: this, seat: Seat) => void): number;
    emit(signal: "seat-added", seat: Seat): void;
    connect(signal: "seat-removed", callback: (_source: this, seat: Seat) => void): number;
    connect_after(signal: "seat-removed", callback: (_source: this, seat: Seat) => void): number;
    emit(signal: "seat-removed", seat: Seat): void;
    connect(signal: "setting-changed", callback: (_source: this, setting: string) => void): number;
    connect_after(signal: "setting-changed", callback: (_source: this, setting: string) => void): number;
    emit(signal: "setting-changed", setting: string): void;

    // Members

    beep(): void;
    close(): void;
    device_is_grabbed(device: Device): boolean;
    flush(): void;
    get_app_launch_context(): AppLaunchContext;
    get_clipboard(): Clipboard;
    get_default_seat(): Seat | null;
    get_monitor_at_surface(surface: Surface): Monitor;
    get_monitors(): Gio.ListModel;
    get_name(): string;
    get_primary_clipboard(): Clipboard;
    get_setting(name: string, value: any): boolean;
    get_startup_notification_id(): string | null;
    is_closed(): boolean;
    is_composited(): boolean;
    is_rgba(): boolean;
    list_seats(): Seat[];
    map_keycode(keycode: number): [boolean, KeymapKey[] | null, number[] | null];
    map_keyval(keyval: number): [boolean, KeymapKey[]];
    notify_startup_complete(startup_id: string): void;
    put_event(event: Event): void;
    supports_input_shapes(): boolean;
    sync(): void;
    translate_key(
        keycode: number,
        state: ModifierType,
        group: number
    ): [boolean, number | null, number | null, number | null, ModifierType | null];
    static get_default(): Display | null;
    static open(display_name: string): Display | null;
}
export module DisplayManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        default_display: Display;
        defaultDisplay: Display;
    }
}
export class DisplayManager extends GObject.Object {
    static $gtype: GObject.GType<DisplayManager>;

    constructor(properties?: Partial<DisplayManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DisplayManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    default_display: Display;
    defaultDisplay: Display;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "display-opened", callback: (_source: this, display: Display) => void): number;
    connect_after(signal: "display-opened", callback: (_source: this, display: Display) => void): number;
    emit(signal: "display-opened", display: Display): void;

    // Members

    get_default_display(): Display | null;
    list_displays(): Display[];
    open_display(name: string): Display | null;
    set_default_display(display: Display): void;
    static get(): DisplayManager;
}
export module Drag {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        actions: DragAction;
        content: ContentProvider;
        device: Device;
        display: Display;
        formats: ContentFormats;
        selected_action: DragAction;
        selectedAction: DragAction;
        surface: Surface;
    }
}
export abstract class Drag extends GObject.Object {
    static $gtype: GObject.GType<Drag>;

    constructor(properties?: Partial<Drag.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Drag.ConstructorProperties>, ...args: any[]): void;

    // Properties
    actions: DragAction;
    content: ContentProvider;
    device: Device;
    display: Display;
    formats: ContentFormats;
    selected_action: DragAction;
    selectedAction: DragAction;
    surface: Surface;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "cancel", callback: (_source: this, reason: DragCancelReason) => void): number;
    connect_after(signal: "cancel", callback: (_source: this, reason: DragCancelReason) => void): number;
    emit(signal: "cancel", reason: DragCancelReason): void;
    connect(signal: "dnd-finished", callback: (_source: this) => void): number;
    connect_after(signal: "dnd-finished", callback: (_source: this) => void): number;
    emit(signal: "dnd-finished"): void;
    connect(signal: "drop-performed", callback: (_source: this) => void): number;
    connect_after(signal: "drop-performed", callback: (_source: this) => void): number;
    emit(signal: "drop-performed"): void;

    // Members

    drop_done(success: boolean): void;
    get_actions(): DragAction;
    get_content(): ContentProvider;
    get_device(): Device;
    get_display(): Display;
    get_drag_surface(): Surface | null;
    get_formats(): ContentFormats;
    get_selected_action(): DragAction;
    get_surface(): Surface;
    set_hotspot(hot_x: number, hot_y: number): void;
    static begin(
        surface: Surface,
        device: Device,
        content: ContentProvider,
        actions: DragAction,
        dx: number,
        dy: number
    ): Drag | null;
}
export module DrawContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        display: Display;
        surface: Surface;
    }
}
export abstract class DrawContext extends GObject.Object {
    static $gtype: GObject.GType<DrawContext>;

    constructor(properties?: Partial<DrawContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DrawContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    display: Display;
    surface: Surface;

    // Members

    begin_frame(region: cairo.Region): void;
    end_frame(): void;
    get_display(): Display | null;
    get_frame_region(): cairo.Region | null;
    get_surface(): Surface | null;
    is_in_frame(): boolean;
}
export module Drop {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        actions: DragAction;
        device: Device;
        display: Display;
        drag: Drag;
        formats: ContentFormats;
        surface: Surface;
    }
}
export abstract class Drop extends GObject.Object {
    static $gtype: GObject.GType<Drop>;

    constructor(properties?: Partial<Drop.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Drop.ConstructorProperties>, ...args: any[]): void;

    // Properties
    actions: DragAction;
    device: Device;
    display: Display;
    drag: Drag;
    formats: ContentFormats;
    surface: Surface;

    // Members

    finish(action: DragAction): void;
    get_actions(): DragAction;
    get_device(): Device;
    get_display(): Display;
    get_drag(): Drag | null;
    get_formats(): ContentFormats;
    get_surface(): Surface;
    read_async(
        mime_types: string[],
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<[Gio.InputStream | null, string]>;
    read_async(
        mime_types: string[],
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    read_async(
        mime_types: string[],
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Gio.InputStream | null, string]> | void;
    read_finish(result: Gio.AsyncResult): [Gio.InputStream | null, string];
    read_value_async(
        type: GObject.GType,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<GObject.Value>;
    read_value_async(
        type: GObject.GType,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    read_value_async(
        type: GObject.GType,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GObject.Value> | void;
    read_value_finish(result: Gio.AsyncResult): unknown;
    status(actions: DragAction, preferred: DragAction): void;
}
export module Event {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Event {
    static $gtype: GObject.GType<Event>;

    constructor(properties?: Partial<Event.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Event.ConstructorProperties>, ...args: any[]): void;

    // Members

    _get_angle(event2: Event): [boolean, number];
    _get_center(event2: Event): [boolean, number, number];
    _get_distance(event2: Event): [boolean, number];
    get_axes(): [boolean, number[]];
    get_axis(axis_use: AxisUse): [boolean, number];
    get_device(): Device | null;
    get_device_tool(): DeviceTool | null;
    get_display(): Display | null;
    get_event_sequence(): EventSequence;
    get_event_type(): EventType;
    get_history(): TimeCoord[] | null;
    get_modifier_state(): ModifierType;
    get_pointer_emulated(): boolean;
    get_position(): [boolean, number, number];
    get_seat(): Seat | null;
    get_surface(): Surface;
    get_time(): number;
    ref(): Event;
    triggers_context_menu(): boolean;
    unref(): void;
}
export module FocusEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class FocusEvent extends Event {
    static $gtype: GObject.GType<FocusEvent>;

    constructor(properties?: Partial<FocusEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FocusEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_in(): boolean;
}
export module FrameClock {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class FrameClock extends GObject.Object {
    static $gtype: GObject.GType<FrameClock>;

    constructor(properties?: Partial<FrameClock.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FrameClock.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "after-paint", callback: (_source: this) => void): number;
    connect_after(signal: "after-paint", callback: (_source: this) => void): number;
    emit(signal: "after-paint"): void;
    connect(signal: "before-paint", callback: (_source: this) => void): number;
    connect_after(signal: "before-paint", callback: (_source: this) => void): number;
    emit(signal: "before-paint"): void;
    connect(signal: "flush-events", callback: (_source: this) => void): number;
    connect_after(signal: "flush-events", callback: (_source: this) => void): number;
    emit(signal: "flush-events"): void;
    connect(signal: "layout", callback: (_source: this) => void): number;
    connect_after(signal: "layout", callback: (_source: this) => void): number;
    emit(signal: "layout"): void;
    connect(signal: "paint", callback: (_source: this) => void): number;
    connect_after(signal: "paint", callback: (_source: this) => void): number;
    emit(signal: "paint"): void;
    connect(signal: "resume-events", callback: (_source: this) => void): number;
    connect_after(signal: "resume-events", callback: (_source: this) => void): number;
    emit(signal: "resume-events"): void;
    connect(signal: "update", callback: (_source: this) => void): number;
    connect_after(signal: "update", callback: (_source: this) => void): number;
    emit(signal: "update"): void;

    // Members

    begin_updating(): void;
    end_updating(): void;
    get_current_timings(): FrameTimings | null;
    get_fps(): number;
    get_frame_counter(): number;
    get_frame_time(): number;
    get_history_start(): number;
    get_refresh_info(base_time: number): [number | null, number];
    get_timings(frame_counter: number): FrameTimings | null;
    request_phase(phase: FrameClockPhase): void;
}
export module GLContext {
    export interface ConstructorProperties extends DrawContext.ConstructorProperties {
        [key: string]: any;
        shared_context: GLContext;
        sharedContext: GLContext;
    }
}
export abstract class GLContext extends DrawContext {
    static $gtype: GObject.GType<GLContext>;

    constructor(properties?: Partial<GLContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    shared_context: GLContext;
    sharedContext: GLContext;

    // Members

    get_debug_enabled(): boolean;
    get_display(): Display | null;
    get_forward_compatible(): boolean;
    get_required_version(): [number | null, number | null];
    get_shared_context(): GLContext | null;
    get_surface(): Surface | null;
    get_use_es(): boolean;
    get_version(): [number, number];
    is_legacy(): boolean;
    make_current(): void;
    realize(): boolean;
    set_debug_enabled(enabled: boolean): void;
    set_forward_compatible(compatible: boolean): void;
    set_required_version(major: number, minor: number): void;
    set_use_es(use_es: number): void;
    static clear_current(): void;
    static get_current(): GLContext | null;
}
export module GLTexture {
    export interface ConstructorProperties extends Texture.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLTexture extends Texture implements Paintable {
    static $gtype: GObject.GType<GLTexture>;

    constructor(properties?: Partial<GLTexture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLTexture.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](context: GLContext, id: number, width: number, height: number, data?: any | null): GLTexture;

    // Members

    release(): void;

    // Implemented Members

    compute_concrete_size(
        specified_width: number,
        specified_height: number,
        default_width: number,
        default_height: number
    ): [number, number];
    get_current_image(): Paintable;
    get_flags(): PaintableFlags;
    get_intrinsic_aspect_ratio(): number;
    get_intrinsic_height(): number;
    get_intrinsic_width(): number;
    invalidate_contents(): void;
    invalidate_size(): void;
    snapshot(snapshot: Snapshot, width: number, height: number): void;
    vfunc_get_current_image(): Paintable;
    vfunc_get_flags(): PaintableFlags;
    vfunc_get_intrinsic_aspect_ratio(): number;
    vfunc_get_intrinsic_height(): number;
    vfunc_get_intrinsic_width(): number;
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
}
export module GrabBrokenEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class GrabBrokenEvent extends Event {
    static $gtype: GObject.GType<GrabBrokenEvent>;

    constructor(properties?: Partial<GrabBrokenEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GrabBrokenEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_grab_surface(): Surface;
    get_implicit(): boolean;
}
export module KeyEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class KeyEvent extends Event {
    static $gtype: GObject.GType<KeyEvent>;

    constructor(properties?: Partial<KeyEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<KeyEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_consumed_modifiers(): ModifierType;
    get_keycode(): number;
    get_keyval(): number;
    get_layout(): number;
    get_level(): number;
    get_match(): [boolean, number, ModifierType];
    is_modifier(): boolean;
    matches(keyval: number, modifiers: ModifierType): KeyMatch;
}
export module MemoryTexture {
    export interface ConstructorProperties extends Texture.ConstructorProperties {
        [key: string]: any;
    }
}
export class MemoryTexture extends Texture implements Paintable {
    static $gtype: GObject.GType<MemoryTexture>;

    constructor(properties?: Partial<MemoryTexture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MemoryTexture.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        width: number,
        height: number,
        format: MemoryFormat,
        bytes: GLib.Bytes | Uint8Array,
        stride: number
    ): MemoryTexture;

    // Implemented Members

    compute_concrete_size(
        specified_width: number,
        specified_height: number,
        default_width: number,
        default_height: number
    ): [number, number];
    get_current_image(): Paintable;
    get_flags(): PaintableFlags;
    get_intrinsic_aspect_ratio(): number;
    get_intrinsic_height(): number;
    get_intrinsic_width(): number;
    invalidate_contents(): void;
    invalidate_size(): void;
    snapshot(snapshot: Snapshot, width: number, height: number): void;
    vfunc_get_current_image(): Paintable;
    vfunc_get_flags(): PaintableFlags;
    vfunc_get_intrinsic_aspect_ratio(): number;
    vfunc_get_intrinsic_height(): number;
    vfunc_get_intrinsic_width(): number;
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
}
export module Monitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        connector: string;
        display: Display;
        geometry: Rectangle;
        height_mm: number;
        heightMm: number;
        manufacturer: string;
        model: string;
        refresh_rate: number;
        refreshRate: number;
        scale_factor: number;
        scaleFactor: number;
        subpixel_layout: SubpixelLayout;
        subpixelLayout: SubpixelLayout;
        valid: boolean;
        width_mm: number;
        widthMm: number;
    }
}
export class Monitor extends GObject.Object {
    static $gtype: GObject.GType<Monitor>;

    constructor(properties?: Partial<Monitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Monitor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connector: string;
    display: Display;
    geometry: Rectangle;
    height_mm: number;
    heightMm: number;
    manufacturer: string;
    model: string;
    refresh_rate: number;
    refreshRate: number;
    scale_factor: number;
    scaleFactor: number;
    subpixel_layout: SubpixelLayout;
    subpixelLayout: SubpixelLayout;
    valid: boolean;
    width_mm: number;
    widthMm: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "invalidate", callback: (_source: this) => void): number;
    connect_after(signal: "invalidate", callback: (_source: this) => void): number;
    emit(signal: "invalidate"): void;

    // Members

    get_connector(): string | null;
    get_display(): Display;
    get_geometry(): Rectangle;
    get_height_mm(): number;
    get_manufacturer(): string | null;
    get_model(): string | null;
    get_refresh_rate(): number;
    get_scale_factor(): number;
    get_subpixel_layout(): SubpixelLayout;
    get_width_mm(): number;
    is_valid(): boolean;
}
export module MotionEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class MotionEvent extends Event {
    static $gtype: GObject.GType<MotionEvent>;

    constructor(properties?: Partial<MotionEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MotionEvent.ConstructorProperties>, ...args: any[]): void;
}
export module PadEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class PadEvent extends Event {
    static $gtype: GObject.GType<PadEvent>;

    constructor(properties?: Partial<PadEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PadEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_axis_value(): [number, number];
    get_button(): number;
    get_group_mode(): [number, number];
}
export module ProximityEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class ProximityEvent extends Event {
    static $gtype: GObject.GType<ProximityEvent>;

    constructor(properties?: Partial<ProximityEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProximityEvent.ConstructorProperties>, ...args: any[]): void;
}
export module ScrollEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class ScrollEvent extends Event {
    static $gtype: GObject.GType<ScrollEvent>;

    constructor(properties?: Partial<ScrollEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrollEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_deltas(): [number, number];
    get_direction(): ScrollDirection;
    is_stop(): boolean;
}
export module Seat {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        display: Display;
    }
}
export abstract class Seat extends GObject.Object {
    static $gtype: GObject.GType<Seat>;

    constructor(properties?: Partial<Seat.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Seat.ConstructorProperties>, ...args: any[]): void;

    // Properties
    display: Display;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "device-added", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "device-added", callback: (_source: this, device: Device) => void): number;
    emit(signal: "device-added", device: Device): void;
    connect(signal: "device-removed", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "device-removed", callback: (_source: this, device: Device) => void): number;
    emit(signal: "device-removed", device: Device): void;
    connect(signal: "tool-added", callback: (_source: this, tool: DeviceTool) => void): number;
    connect_after(signal: "tool-added", callback: (_source: this, tool: DeviceTool) => void): number;
    emit(signal: "tool-added", tool: DeviceTool): void;
    connect(signal: "tool-removed", callback: (_source: this, tool: DeviceTool) => void): number;
    connect_after(signal: "tool-removed", callback: (_source: this, tool: DeviceTool) => void): number;
    emit(signal: "tool-removed", tool: DeviceTool): void;

    // Members

    get_capabilities(): SeatCapabilities;
    get_devices(capabilities: SeatCapabilities): Device[];
    get_display(): Display;
    get_keyboard(): Device | null;
    get_pointer(): Device | null;
    get_tools(): DeviceTool[];
}
export module Snapshot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Snapshot extends GObject.Object {
    static $gtype: GObject.GType<Snapshot>;

    constructor(properties?: Partial<Snapshot.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Snapshot.ConstructorProperties>, ...args: any[]): void;
}
export module Surface {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        cursor: Cursor;
        display: Display;
        frame_clock: FrameClock;
        frameClock: FrameClock;
        height: number;
        mapped: boolean;
        scale_factor: number;
        scaleFactor: number;
        width: number;
    }
}
export abstract class Surface extends GObject.Object {
    static $gtype: GObject.GType<Surface>;

    constructor(properties?: Partial<Surface.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Surface.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cursor: Cursor;
    display: Display;
    frame_clock: FrameClock;
    frameClock: FrameClock;
    height: number;
    mapped: boolean;
    scale_factor: number;
    scaleFactor: number;
    width: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "enter-monitor", callback: (_source: this, monitor: Monitor) => void): number;
    connect_after(signal: "enter-monitor", callback: (_source: this, monitor: Monitor) => void): number;
    emit(signal: "enter-monitor", monitor: Monitor): void;
    connect(signal: "event", callback: (_source: this, event: Event) => boolean): number;
    connect_after(signal: "event", callback: (_source: this, event: Event) => boolean): number;
    emit(signal: "event", event: Event): void;
    connect(signal: "layout", callback: (_source: this, width: number, height: number) => void): number;
    connect_after(signal: "layout", callback: (_source: this, width: number, height: number) => void): number;
    emit(signal: "layout", width: number, height: number): void;
    connect(signal: "leave-monitor", callback: (_source: this, monitor: Monitor) => void): number;
    connect_after(signal: "leave-monitor", callback: (_source: this, monitor: Monitor) => void): number;
    emit(signal: "leave-monitor", monitor: Monitor): void;
    connect(signal: "render", callback: (_source: this, region: cairo.Region) => boolean): number;
    connect_after(signal: "render", callback: (_source: this, region: cairo.Region) => boolean): number;
    emit(signal: "render", region: cairo.Region): void;

    // Constructors

    static new_popup(parent: Surface, autohide: boolean): Surface;
    static new_toplevel(display: Display): Surface;

    // Members

    beep(): void;
    create_cairo_context(): CairoContext;
    create_gl_context(): GLContext;
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface;
    create_vulkan_context(): VulkanContext;
    destroy(): void;
    get_cursor(): Cursor | null;
    get_device_cursor(device: Device): Cursor | null;
    get_device_position(device: Device): [boolean, number | null, number | null, ModifierType | null];
    get_display(): Display;
    get_frame_clock(): FrameClock;
    get_height(): number;
    get_mapped(): boolean;
    get_scale_factor(): number;
    get_width(): number;
    hide(): void;
    is_destroyed(): boolean;
    queue_render(): void;
    request_layout(): void;
    set_cursor(cursor?: Cursor | null): void;
    set_device_cursor(device: Device, cursor: Cursor): void;
    set_input_region(region: cairo.Region): void;
    set_opaque_region(region?: cairo.Region | null): void;
    translate_coordinates(to: Surface, x: number, y: number): boolean;
}
export module Texture {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        height: number;
        width: number;
    }
}
export abstract class Texture extends GObject.Object implements Paintable {
    static $gtype: GObject.GType<Texture>;

    constructor(properties?: Partial<Texture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Texture.ConstructorProperties>, ...args: any[]): void;

    // Properties
    height: number;
    width: number;

    // Constructors

    static new_for_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Texture;
    static new_from_file(file: Gio.File): Texture;
    static new_from_resource(resource_path: string): Texture;

    // Members

    download(data: Uint8Array | string, stride: number): void;
    get_height(): number;
    get_width(): number;
    save_to_png(filename: string): boolean;

    // Implemented Members

    compute_concrete_size(
        specified_width: number,
        specified_height: number,
        default_width: number,
        default_height: number
    ): [number, number];
    get_current_image(): Paintable;
    get_flags(): PaintableFlags;
    get_intrinsic_aspect_ratio(): number;
    get_intrinsic_height(): number;
    get_intrinsic_width(): number;
    invalidate_contents(): void;
    invalidate_size(): void;
    snapshot(snapshot: Snapshot, width: number, height: number): void;
    vfunc_get_current_image(): Paintable;
    vfunc_get_flags(): PaintableFlags;
    vfunc_get_intrinsic_aspect_ratio(): number;
    vfunc_get_intrinsic_height(): number;
    vfunc_get_intrinsic_width(): number;
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
}
export module TouchEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class TouchEvent extends Event {
    static $gtype: GObject.GType<TouchEvent>;

    constructor(properties?: Partial<TouchEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TouchEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_emulating_pointer(): boolean;
}
export module TouchpadEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
    }
}
export class TouchpadEvent extends Event {
    static $gtype: GObject.GType<TouchpadEvent>;

    constructor(properties?: Partial<TouchpadEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TouchpadEvent.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_deltas(): [number, number];
    get_gesture_phase(): TouchpadGesturePhase;
    get_n_fingers(): number;
    get_pinch_angle_delta(): number;
    get_pinch_scale(): number;
}
export module VulkanContext {
    export interface ConstructorProperties extends DrawContext.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class VulkanContext extends DrawContext implements Gio.Initable {
    static $gtype: GObject.GType<VulkanContext>;

    constructor(properties?: Partial<VulkanContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanContext.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "images-updated", callback: (_source: this) => void): number;
    connect_after(signal: "images-updated", callback: (_source: this) => void): number;
    emit(signal: "images-updated"): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export class ContentFormats {
    static $gtype: GObject.GType<ContentFormats>;

    constructor(mime_types?: string[] | null);
    constructor(copy: ContentFormats);

    // Constructors
    static ["new"](mime_types?: string[] | null): ContentFormats;
    static new_for_gtype(type: GObject.GType): ContentFormats;

    // Members
    contain_gtype(type: GObject.GType): boolean;
    contain_mime_type(mime_type: string): boolean;
    get_gtypes(): GObject.GType[] | null;
    get_mime_types(): [string[] | null, number | null];
    match(second: ContentFormats): boolean;
    match_gtype(second: ContentFormats): GObject.GType;
    match_mime_type(second: ContentFormats): string | null;
    print(string: GLib.String): void;
    ref(): ContentFormats;
    to_string(): string;
    union(second: ContentFormats): ContentFormats;
    union_deserialize_gtypes(): ContentFormats;
    union_deserialize_mime_types(): ContentFormats;
    union_serialize_gtypes(): ContentFormats;
    union_serialize_mime_types(): ContentFormats;
    unref(): void;
}

export class ContentFormatsBuilder {
    static $gtype: GObject.GType<ContentFormatsBuilder>;

    constructor();
    constructor(copy: ContentFormatsBuilder);

    // Constructors
    static ["new"](): ContentFormatsBuilder;

    // Members
    add_formats(formats: ContentFormats): void;
    add_gtype(type: GObject.GType): void;
    add_mime_type(mime_type: string): void;
    ref(): ContentFormatsBuilder;
    to_formats(): ContentFormats;
    unref(): void;
}

export class DrawingContext {
    static $gtype: GObject.GType<DrawingContext>;

    constructor(copy: DrawingContext);
}

export class EventSequence {
    static $gtype: GObject.GType<EventSequence>;

    constructor(copy: EventSequence);
}

export class FrameClockPrivate {
    static $gtype: GObject.GType<FrameClockPrivate>;

    constructor(copy: FrameClockPrivate);
}

export class FrameTimings {
    static $gtype: GObject.GType<FrameTimings>;

    constructor(copy: FrameTimings);

    // Members
    get_complete(): boolean;
    get_frame_counter(): number;
    get_frame_time(): number;
    get_predicted_presentation_time(): number;
    get_presentation_time(): number;
    get_refresh_interval(): number;
    ref(): FrameTimings;
    unref(): void;
}

export class KeymapKey {
    static $gtype: GObject.GType<KeymapKey>;

    constructor(
        properties?: Partial<{
            keycode?: number;
            group?: number;
            level?: number;
        }>
    );
    constructor(copy: KeymapKey);

    // Fields
    keycode: number;
    group: number;
    level: number;
}

export class PopupLayout {
    static $gtype: GObject.GType<PopupLayout>;

    constructor(anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity);
    constructor(copy: PopupLayout);

    // Constructors
    static ["new"](anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity): PopupLayout;

    // Members
    copy(): PopupLayout;
    equal(other: PopupLayout): boolean;
    get_anchor_hints(): AnchorHints;
    get_anchor_rect(): Rectangle;
    get_offset(): [number, number];
    get_rect_anchor(): Gravity;
    get_surface_anchor(): Gravity;
    ref(): PopupLayout;
    set_anchor_hints(anchor_hints: AnchorHints): void;
    set_anchor_rect(anchor_rect: Rectangle): void;
    set_offset(dx: number, dy: number): void;
    set_rect_anchor(anchor: Gravity): void;
    set_surface_anchor(anchor: Gravity): void;
    unref(): void;
}

export class RGBA {
    static $gtype: GObject.GType<RGBA>;

    constructor(
        properties?: Partial<{
            red?: number;
            green?: number;
            blue?: number;
            alpha?: number;
        }>
    );
    constructor(copy: RGBA);

    // Fields
    red: number;
    green: number;
    blue: number;
    alpha: number;

    // Members
    copy(): RGBA;
    equal(p2: RGBA): boolean;
    free(): void;
    hash(): number;
    is_clear(): boolean;
    is_opaque(): boolean;
    parse(spec: string): boolean;
    to_string(): string;
}

export class Rectangle {
    static $gtype: GObject.GType<Rectangle>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            width?: number;
            height?: number;
        }>
    );
    constructor(copy: Rectangle);

    // Fields
    x: number;
    y: number;
    width: number;
    height: number;

    // Members
    contains_point(x: number, y: number): boolean;
    equal(rect2: Rectangle): boolean;
    intersect(src2: Rectangle): [boolean, Rectangle | null];
    union(src2: Rectangle): Rectangle;
}

export class TimeCoord {
    static $gtype: GObject.GType<TimeCoord>;

    constructor(copy: TimeCoord);

    // Fields
    time: number;
    flags: AxisFlags;
    axes: number[];
}

export class ToplevelLayout {
    static $gtype: GObject.GType<ToplevelLayout>;

    constructor();
    constructor(copy: ToplevelLayout);

    // Constructors
    static ["new"](): ToplevelLayout;

    // Members
    copy(): ToplevelLayout;
    equal(other: ToplevelLayout): boolean;
    get_fullscreen(): [boolean, boolean];
    get_fullscreen_monitor(): Monitor | null;
    get_maximized(): [boolean, boolean];
    get_resizable(): boolean;
    ref(): ToplevelLayout;
    set_fullscreen(fullscreen: boolean, monitor?: Monitor | null): void;
    set_maximized(maximized: boolean): void;
    set_resizable(resizable: boolean): void;
    unref(): void;
}

export class ToplevelSize {
    static $gtype: GObject.GType<ToplevelSize>;

    constructor(copy: ToplevelSize);

    // Members
    get_bounds(): [number, number];
    set_min_size(min_width: number, min_height: number): void;
    set_shadow_width(left: number, right: number, top: number, bottom: number): void;
    set_size(width: number, height: number): void;
}

export interface DevicePadNamespace {
    $gtype: GObject.GType<DevicePad>;
    prototype: DevicePadPrototype;
}
export type DevicePad = DevicePadPrototype;
export interface DevicePadPrototype extends Device {
    // Members

    get_feature_group(feature: DevicePadFeature, feature_idx: number): number;
    get_group_n_modes(group_idx: number): number;
    get_n_features(feature: DevicePadFeature): number;
    get_n_groups(): number;
}

export const DevicePad: DevicePadNamespace;

export interface DragSurfaceNamespace {
    $gtype: GObject.GType<DragSurface>;
    prototype: DragSurfacePrototype;
}
export type DragSurface = DragSurfacePrototype;
export interface DragSurfacePrototype extends Surface {
    // Members

    present(width: number, height: number): boolean;
}

export const DragSurface: DragSurfaceNamespace;

export interface PaintableNamespace {
    $gtype: GObject.GType<Paintable>;
    prototype: PaintablePrototype;

    new_empty(intrinsic_width: number, intrinsic_height: number): Paintable;
}
export type Paintable = PaintablePrototype;
export interface PaintablePrototype extends GObject.Object {
    // Members

    compute_concrete_size(
        specified_width: number,
        specified_height: number,
        default_width: number,
        default_height: number
    ): [number, number];
    get_current_image(): Paintable;
    get_flags(): PaintableFlags;
    get_intrinsic_aspect_ratio(): number;
    get_intrinsic_height(): number;
    get_intrinsic_width(): number;
    invalidate_contents(): void;
    invalidate_size(): void;
    snapshot(snapshot: Snapshot, width: number, height: number): void;
    vfunc_get_current_image(): Paintable;
    vfunc_get_flags(): PaintableFlags;
    vfunc_get_intrinsic_aspect_ratio(): number;
    vfunc_get_intrinsic_height(): number;
    vfunc_get_intrinsic_width(): number;
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
}

export const Paintable: PaintableNamespace;

export interface PopupNamespace {
    $gtype: GObject.GType<Popup>;
    prototype: PopupPrototype;
}
export type Popup = PopupPrototype;
export interface PopupPrototype extends Surface {
    // Properties
    autohide: boolean;

    // Members

    get_autohide(): boolean;
    get_parent(): Surface;
    get_position_x(): number;
    get_position_y(): number;
    get_rect_anchor(): Gravity;
    get_surface_anchor(): Gravity;
    present(width: number, height: number, layout: PopupLayout): boolean;
}

export const Popup: PopupNamespace;

export interface ToplevelNamespace {
    $gtype: GObject.GType<Toplevel>;
    prototype: ToplevelPrototype;
}
export type Toplevel = ToplevelPrototype;
export interface ToplevelPrototype extends Surface {
    // Properties
    decorated: boolean;
    deletable: boolean;
    fullscreen_mode: FullscreenMode;
    fullscreenMode: FullscreenMode;
    icon_list: any;
    iconList: any;
    modal: boolean;
    shortcuts_inhibited: boolean;
    shortcutsInhibited: boolean;
    startup_id: string;
    startupId: string;
    state: ToplevelState;
    title: string;
    transient_for: Surface;
    transientFor: Surface;

    // Members

    begin_move(device: Device, button: number, x: number, y: number, timestamp: number): void;
    begin_resize(
        edge: SurfaceEdge,
        device: Device | null,
        button: number,
        x: number,
        y: number,
        timestamp: number
    ): void;
    focus(timestamp: number): void;
    get_state(): ToplevelState;
    inhibit_system_shortcuts(event?: Event | null): void;
    lower(): boolean;
    minimize(): boolean;
    present(layout: ToplevelLayout): void;
    restore_system_shortcuts(): void;
    set_decorated(decorated: boolean): void;
    set_deletable(deletable: boolean): void;
    set_icon_list(surfaces: Texture[]): void;
    set_modal(modal: boolean): void;
    set_startup_id(startup_id: string): void;
    set_title(title: string): void;
    set_transient_for(parent: Surface): void;
    show_window_menu(event: Event): boolean;
    supports_edge_constraints(): boolean;
}

export const Toplevel: ToplevelNamespace;
