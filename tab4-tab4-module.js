(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _coms_person_sign_person_sign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../coms/person-sign/person-sign.component */ "./src/app/coms/person-sign/person-sign.component.ts");
/* harmony import */ var _coms_adviser_info_adviser_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../coms/adviser-info/adviser-info.component */ "./src/app/coms/adviser-info/adviser-info.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
/* harmony import */ var src_app_coms_chatonline_chatonline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/coms/chatonline/chatonline.component */ "./src/app/coms/chatonline/chatonline.component.ts");
/* harmony import */ var src_app_coms_member_status_member_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/coms/member-status/member-status.component */ "./src/app/coms/member-status/member-status.component.ts");
/* harmony import */ var src_app_coms_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/coms/search-filter/search-filter.component */ "./src/app/coms/search-filter/search-filter.component.ts");
/* harmony import */ var src_app_coms_footer_protocol_footer_protocol_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/coms/footer-protocol/footer-protocol.component */ "./src/app/coms/footer-protocol/footer-protocol.component.ts");
/* harmony import */ var src_app_coms_browsing_volume_browsing_volume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/coms/browsing-volume/browsing-volume.component */ "./src/app/coms/browsing-volume/browsing-volume.component.ts");
/* harmony import */ var src_app_coms_customer_service_customer_service_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/coms/customer-service/customer-service.component */ "./src/app/coms/customer-service/customer-service.component.ts");
/* harmony import */ var src_app_coms_protocol_template_protocol_template_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/coms/protocol-template/protocol-template.component */ "./src/app/coms/protocol-template/protocol-template.component.ts");
/* harmony import */ var src_app_coms_invitation_to_shop_invitation_to_shop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/coms/invitation-to-shop/invitation-to-shop.component */ "./src/app/coms/invitation-to-shop/invitation-to-shop.component.ts");
/* harmony import */ var src_app_coms_customer_evaluation_customer_evaluation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/coms/customer-evaluation/customer-evaluation.component */ "./src/app/coms/customer-evaluation/customer-evaluation.component.ts");
/* harmony import */ var src_app_coms_my_achievement_chart_my_achievement_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/coms/my-achievement-chart/my-achievement-chart.component */ "./src/app/coms/my-achievement-chart/my-achievement-chart.component.ts");
/* harmony import */ var src_app_coms_exclusive_consultant_exclusive_consultant_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/coms/exclusive-consultant/exclusive-consultant.component */ "./src/app/coms/exclusive-consultant/exclusive-consultant.component.ts");
/* harmony import */ var src_app_coms_promotion_record_list_promotion_record_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/coms/promotion-record-list/promotion-record-list.component */ "./src/app/coms/promotion-record-list/promotion-record-list.component.ts");
/* harmony import */ var src_app_coms_promotion_of_statistics_promotion_of_statistics_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/coms/promotion-of-statistics/promotion-of-statistics.component */ "./src/app/coms/promotion-of-statistics/promotion-of-statistics.component.ts");
/* harmony import */ var src_app_coms_list_value_show_list_value_show_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/coms/list-value-show/list-value-show.component */ "./src/app/coms/list-value-show/list-value-show.component.ts");
/* harmony import */ var src_app_coms_achievement_achievement_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/coms/achievement/achievement.component */ "./src/app/coms/achievement/achievement.component.ts");
/* harmony import */ var _coms_coms_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../coms/coms.module */ "./src/app/coms/coms.module.ts");
/* harmony import */ var _custom_search_bar_custom_search_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../custom-search-bar/custom-search-bar.component */ "./src/app/custom-search-bar/custom-search-bar.component.ts");
/* harmony import */ var _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../search-history/search-history.page */ "./src/app/search-history/search-history.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _coms_accept_recommend_accept_recommend_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../coms/accept-recommend/accept-recommend.component */ "./src/app/coms/accept-recommend/accept-recommend.component.ts");
/* harmony import */ var _coms_address_map_address_map_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../coms/address-map/address-map.component */ "./src/app/coms/address-map/address-map.component.ts");
/* harmony import */ var _coms_address_address_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../coms/address/address.page */ "./src/app/coms/address/address.page.ts");
/* harmony import */ var _coms_advertise_play_advertise_play_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../coms/advertise-play/advertise-play.component */ "./src/app/coms/advertise-play/advertise-play.component.ts");
/* harmony import */ var _coms_all_address_tag_all_address_tag_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../coms/all-address-tag/all-address-tag.component */ "./src/app/coms/all-address-tag/all-address-tag.component.ts");
/* harmony import */ var _coms_analysis_chart_analysis_chart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../coms/analysis-chart/analysis-chart.component */ "./src/app/coms/analysis-chart/analysis-chart.component.ts");
/* harmony import */ var _coms_app_general_list_app_general_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../coms/app-general-list/app-general-list.component */ "./src/app/coms/app-general-list/app-general-list.component.ts");
/* harmony import */ var _coms_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../coms/article-list/article-list.component */ "./src/app/coms/article-list/article-list.component.ts");
/* harmony import */ var _coms_bIcon_link_bIcon_link_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../coms/bIcon-link/bIcon-link.component */ "./src/app/coms/bIcon-link/bIcon-link.component.ts");
/* harmony import */ var _coms_background_style_background_style_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../coms/background-style/background-style.component */ "./src/app/coms/background-style/background-style.component.ts");
/* harmony import */ var _coms_basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../coms/basic-list/basic-list.component */ "./src/app/coms/basic-list/basic-list.component.ts");
/* harmony import */ var _coms_bicon_links_bicon_links_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../coms/bicon-links/bicon-links.component */ "./src/app/coms/bicon-links/bicon-links.component.ts");
/* harmony import */ var _coms_block_link_block_link_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../coms/block-link/block-link.component */ "./src/app/coms/block-link/block-link.component.ts");
/* harmony import */ var _coms_branch_sheet_branch_sheet_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../coms/branch-sheet/branch-sheet.component */ "./src/app/coms/branch-sheet/branch-sheet.component.ts");
/* harmony import */ var _coms_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../coms/brand-list/brand-list.component */ "./src/app/coms/brand-list/brand-list.component.ts");
/* harmony import */ var _coms_publish_title_publish_title_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../coms/publish-title/publish-title.component */ "./src/app/coms/publish-title/publish-title.component.ts");
/* harmony import */ var _coms_investment_list_investment_list_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../coms/investment-list/investment-list.component */ "./src/app/coms/investment-list/investment-list.component.ts");
/* harmony import */ var _coms_open_member_open_member_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../coms/open-member/open-member.component */ "./src/app/coms/open-member/open-member.component.ts");
/* harmony import */ var _coms_recommend_message_recommend_message_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../coms/recommend-message/recommend-message.component */ "./src/app/coms/recommend-message/recommend-message.component.ts");
/* harmony import */ var _coms_myreal_estate_myreal_estate_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../coms/myreal-estate/myreal-estate.component */ "./src/app/coms/myreal-estate/myreal-estate.component.ts");
/* harmony import */ var _coms_attract_list_attract_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../coms/attract-list/attract-list.component */ "./src/app/coms/attract-list/attract-list.component.ts");
/* harmony import */ var _coms_brand_brand_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../coms/brand/brand.component */ "./src/app/coms/brand/brand.component.ts");
/* harmony import */ var _coms_business_city_business_city_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../coms/business-city/business-city.component */ "./src/app/coms/business-city/business-city.component.ts");
/* harmony import */ var _coms_business_modal_business_modal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../coms/business-modal/business-modal.component */ "./src/app/coms/business-modal/business-modal.component.ts");
/* harmony import */ var _coms_business_summary_business_summary_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../coms/business-summary/business-summary.component */ "./src/app/coms/business-summary/business-summary.component.ts");
/* harmony import */ var _coms_button_heap_button_heap_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../coms/button-heap/button-heap.component */ "./src/app/coms/button-heap/button-heap.component.ts");
/* harmony import */ var _coms_button_nav_default_button_nav_default_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../coms/button-nav-default/button-nav-default.component */ "./src/app/coms/button-nav-default/button-nav-default.component.ts");
/* harmony import */ var _coms_button_nav_five_button_nav_five_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../coms/button-nav-five/button-nav-five.component */ "./src/app/coms/button-nav-five/button-nav-five.component.ts");
/* harmony import */ var _coms_button_nav_four_button_nav_four_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../coms/button-nav-four/button-nav-four.component */ "./src/app/coms/button-nav-four/button-nav-four.component.ts");
/* harmony import */ var _coms_button_nav_one_button_nav_one_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../coms/button-nav-one/button-nav-one.component */ "./src/app/coms/button-nav-one/button-nav-one.component.ts");
/* harmony import */ var _coms_button_nav_three_button_nav_three_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../coms/button-nav-three/button-nav-three.component */ "./src/app/coms/button-nav-three/button-nav-three.component.ts");
/* harmony import */ var _coms_button_nav_two_button_nav_two_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../coms/button-nav-two/button-nav-two.component */ "./src/app/coms/button-nav-two/button-nav-two.component.ts");
/* harmony import */ var _coms_button_nav_button_nav_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../coms/button-nav/button-nav.component */ "./src/app/coms/button-nav/button-nav.component.ts");
/* harmony import */ var _coms_button_button_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../coms/button/button.component */ "./src/app/coms/button/button.component.ts");
/* harmony import */ var _coms_call_call_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../coms/call/call.component */ "./src/app/coms/call/call.component.ts");
/* harmony import */ var _coms_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../coms/carousel/carousel.component */ "./src/app/coms/carousel/carousel.component.ts");
/* harmony import */ var _coms_case_list_case_list_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../coms/case-list/case-list.component */ "./src/app/coms/case-list/case-list.component.ts");
/* harmony import */ var _coms_case_recommed_list_case_recommed_list_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../coms/case-recommed-list/case-recommed-list.component */ "./src/app/coms/case-recommed-list/case-recommed-list.component.ts");
/* harmony import */ var _coms_case_remark_case_remark_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../coms/case-remark/case-remark.component */ "./src/app/coms/case-remark/case-remark.component.ts");
/* harmony import */ var _coms_case_case_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../coms/case/case.component */ "./src/app/coms/case/case.component.ts");
/* harmony import */ var _coms_change_pwd_change_pwd_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../coms/change-pwd/change-pwd.component */ "./src/app/coms/change-pwd/change-pwd.component.ts");
/* harmony import */ var _coms_chat_invite_chat_invite_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../coms/chat-invite/chat-invite.component */ "./src/app/coms/chat-invite/chat-invite.component.ts");
/* harmony import */ var _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../coms/choose-city/choose-city.component */ "./src/app/coms/choose-city/choose-city.component.ts");
/* harmony import */ var _coms_choose_department_choose_department_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../coms/choose-department/choose-department.component */ "./src/app/coms/choose-department/choose-department.component.ts");
/* harmony import */ var _coms_choose_type_choose_type_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../coms/choose-type/choose-type.component */ "./src/app/coms/choose-type/choose-type.component.ts");
/* harmony import */ var _coms_city_modal_city_modal_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../coms/city-modal/city-modal.component */ "./src/app/coms/city-modal/city-modal.component.ts");
/* harmony import */ var _coms_column_tag_column_tag_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../coms/column-tag/column-tag.component */ "./src/app/coms/column-tag/column-tag.component.ts");
/* harmony import */ var _coms_common_btn_common_btn_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../coms/common-btn/common-btn.component */ "./src/app/coms/common-btn/common-btn.component.ts");
/* harmony import */ var _coms_companies_credential_companies_credential_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../coms/companies-credential/companies-credential.component */ "./src/app/coms/companies-credential/companies-credential.component.ts");
/* harmony import */ var _coms_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../coms/consultant-list/consultant-list.component */ "./src/app/coms/consultant-list/consultant-list.component.ts");
/* harmony import */ var _coms_contract_audit_detail_contract_audit_detail_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../coms/contract-audit-detail/contract-audit-detail.component */ "./src/app/coms/contract-audit-detail/contract-audit-detail.component.ts");
/* harmony import */ var _coms_contract_list_filter_contract_list_filter_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../coms/contract-list-filter/contract-list-filter.component */ "./src/app/coms/contract-list-filter/contract-list-filter.component.ts");
/* harmony import */ var _coms_contract_off_contract_off_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../coms/contract-off/contract-off.component */ "./src/app/coms/contract-off/contract-off.component.ts");
/* harmony import */ var _coms_copy_to_paste_btn_copy_to_paste_btn_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../coms/copy-to-paste-btn/copy-to-paste-btn.component */ "./src/app/coms/copy-to-paste-btn/copy-to-paste-btn.component.ts");
/* harmony import */ var _coms_counselor_list_counselor_list_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./../coms/counselor-list/counselor-list.component */ "./src/app/coms/counselor-list/counselor-list.component.ts");
/* harmony import */ var _coms_counselor_counselor_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../coms/counselor/counselor.component */ "./src/app/coms/counselor/counselor.component.ts");
/* harmony import */ var _coms_custom_phone_custom_phone_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./../coms/custom-phone/custom-phone.component */ "./src/app/coms/custom-phone/custom-phone.component.ts");
/* harmony import */ var _coms_custom_popover_custom_popover_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./../coms/custom-popover/custom-popover.component */ "./src/app/coms/custom-popover/custom-popover.component.ts");
/* harmony import */ var _coms_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../coms/customer-details/customer-details.component */ "./src/app/coms/customer-details/customer-details.component.ts");
/* harmony import */ var _coms_customer_source_customer_source_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../coms/customer-source/customer-source.component */ "./src/app/coms/customer-source/customer-source.component.ts");
/* harmony import */ var _coms_data_map_entry_data_map_entry_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../coms/data-map-entry/data-map-entry.component */ "./src/app/coms/data-map-entry/data-map-entry.component.ts");
/* harmony import */ var _coms_data_map_data_map_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../coms/data-map/data-map.component */ "./src/app/coms/data-map/data-map.component.ts");
/* harmony import */ var _coms_decorate_list_decorate_list_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../coms/decorate-list/decorate-list.component */ "./src/app/coms/decorate-list/decorate-list.component.ts");
/* harmony import */ var _coms_decoration_banner_decoration_banner_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../coms/decoration-banner/decoration-banner.component */ "./src/app/coms/decoration-banner/decoration-banner.component.ts");
/* harmony import */ var _coms_decoration_companies_decoration_companies_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../coms/decoration-companies/decoration-companies.component */ "./src/app/coms/decoration-companies/decoration-companies.component.ts");
/* harmony import */ var _coms_decoration_off_decoration_off_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../coms/decoration-off/decoration-off.component */ "./src/app/coms/decoration-off/decoration-off.component.ts");
/* harmony import */ var _coms_department_employee_department_employee_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../coms/department-employee/department-employee.component */ "./src/app/coms/department-employee/department-employee.component.ts");
/* harmony import */ var _coms_department_introduction_department_introduction_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../coms/department-introduction/department-introduction.component */ "./src/app/coms/department-introduction/department-introduction.component.ts");
/* harmony import */ var _coms_dept_manager_dept_manager_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ../coms/dept-manager/dept-manager.component */ "./src/app/coms/dept-manager/dept-manager.component.ts");
/* harmony import */ var _coms_detail_list_detail_list_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../coms/detail-list/detail-list.component */ "./src/app/coms/detail-list/detail-list.component.ts");
/* harmony import */ var _coms_detail_detail_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../coms/detail/detail.component */ "./src/app/coms/detail/detail.component.ts");
/* harmony import */ var _coms_edit_edit_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../coms/edit/edit.component */ "./src/app/coms/edit/edit.component.ts");
/* harmony import */ var _coms_edit_editnickname_page__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ../coms/edit/editnickname.page */ "./src/app/coms/edit/editnickname.page.ts");
/* harmony import */ var _coms_employee_manager_employee_manager_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ../coms/employee-manager/employee-manager.component */ "./src/app/coms/employee-manager/employee-manager.component.ts");
/* harmony import */ var _coms_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ../coms/example-list/example-list.component */ "./src/app/coms/example-list/example-list.component.ts");
/* harmony import */ var _coms_extend_picture_extend_picture_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ../coms/extend-picture/extend-picture.component */ "./src/app/coms/extend-picture/extend-picture.component.ts");
/* harmony import */ var _coms_filter_recommend_list_filter_recommend_list_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ../coms/filter-recommend-list/filter-recommend-list.component */ "./src/app/coms/filter-recommend-list/filter-recommend-list.component.ts");
/* harmony import */ var _coms_finishcompany_list_finishcompany_list_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ../coms/finishcompany-list/finishcompany-list.component */ "./src/app/coms/finishcompany-list/finishcompany-list.component.ts");
/* harmony import */ var _coms_fixed_tab_fixed_tab_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ../coms/fixed-tab/fixed-tab.component */ "./src/app/coms/fixed-tab/fixed-tab.component.ts");
/* harmony import */ var _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ../coms/footer-logo/footer-logo.component */ "./src/app/coms/footer-logo/footer-logo.component.ts");
/* harmony import */ var _coms_help_transfer_siting_help_transfer_siting_component__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ../coms/help-transfer-siting/help-transfer-siting.component */ "./src/app/coms/help-transfer-siting/help-transfer-siting.component.ts");
/* harmony import */ var _coms_horizontal_list_horizontal_list_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ../coms/horizontal-list/horizontal-list.component */ "./src/app/coms/horizontal-list/horizontal-list.component.ts");
/* harmony import */ var _coms_icon_link_icon_link_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ../coms/icon-link/icon-link.component */ "./src/app/coms/icon-link/icon-link.component.ts");
/* harmony import */ var _coms_industry_analysis_industry_analysis_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ../coms/industry-analysis/industry-analysis.component */ "./src/app/coms/industry-analysis/industry-analysis.component.ts");
/* harmony import */ var _coms_industry_modal_industry_modal_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ../coms/industry-modal/industry-modal.component */ "./src/app/coms/industry-modal/industry-modal.component.ts");
/* harmony import */ var _coms_information_card_information_card_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ../coms/information-card/information-card.component */ "./src/app/coms/information-card/information-card.component.ts");
/* harmony import */ var _coms_information_entry_information_entry_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ../coms/information-entry/information-entry.component */ "./src/app/coms/information-entry/information-entry.component.ts");
/* harmony import */ var _coms_information_hall_information_hall_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ../coms/information-hall/information-hall.component */ "./src/app/coms/information-hall/information-hall.component.ts");
/* harmony import */ var _coms_inner_title_inner_title_component__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ../coms/inner-title/inner-title.component */ "./src/app/coms/inner-title/inner-title.component.ts");
/* harmony import */ var _coms_job_manager_job_manager_component__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ../coms/job-manager/job-manager.component */ "./src/app/coms/job-manager/job-manager.component.ts");
/* harmony import */ var _coms_last_contact_list_last_contact_list_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ../coms/last-contact-list/last-contact-list.component */ "./src/app/coms/last-contact-list/last-contact-list.component.ts");
/* harmony import */ var _coms_line_line_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ../coms/line/line.component */ "./src/app/coms/line/line.component.ts");
/* harmony import */ var _coms_link_list_link_list_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ../coms/link-list/link-list.component */ "./src/app/coms/link-list/link-list.component.ts");
/* harmony import */ var _coms_list_list_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ../coms/list/list.component */ "./src/app/coms/list/list.component.ts");
/* harmony import */ var _coms_login_login_component__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ../coms/login/login.component */ "./src/app/coms/login/login.component.ts");
/* harmony import */ var _coms_logo_call_logo_call_component__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ../coms/logo-call/logo-call.component */ "./src/app/coms/logo-call/logo-call.component.ts");
/* harmony import */ var _coms_manage_business_service_manage_business_service_component__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ../coms/manage-business-service/manage-business-service.component */ "./src/app/coms/manage-business-service/manage-business-service.component.ts");
/* harmony import */ var _coms_managevideo_managevideo_component__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ../coms/managevideo/managevideo.component */ "./src/app/coms/managevideo/managevideo.component.ts");
/* harmony import */ var _coms_map_show_map_show_component__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ../coms/map-show/map-show.component */ "./src/app/coms/map-show/map-show.component.ts");
/* harmony import */ var _coms_membership_service_membership_service_component__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ../coms/membership-service/membership-service.component */ "./src/app/coms/membership-service/membership-service.component.ts");
/* harmony import */ var _coms_merchant_list_merchant_list_component__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ../coms/merchant-list/merchant-list.component */ "./src/app/coms/merchant-list/merchant-list.component.ts");
/* harmony import */ var _coms_mine_list_mine_list_component__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ../coms/mine-list/mine-list.component */ "./src/app/coms/mine-list/mine-list.component.ts");
/* harmony import */ var _coms_mine_mine_component__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ../coms/mine/mine.component */ "./src/app/coms/mine/mine.component.ts");
/* harmony import */ var _coms_more_button_more_button_component__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ../coms/more-button/more-button.component */ "./src/app/coms/more-button/more-button.component.ts");
/* harmony import */ var _coms_new_data_map_new_data_map_page__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ../coms/new-data-map/new-data-map.page */ "./src/app/coms/new-data-map/new-data-map.page.ts");
/* harmony import */ var _coms_news_carousel_news_carousel_component__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ../coms/news-carousel/news-carousel.component */ "./src/app/coms/news-carousel/news-carousel.component.ts");
/* harmony import */ var _coms_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ../coms/news-list/news-list.component */ "./src/app/coms/news-list/news-list.component.ts");
/* harmony import */ var _coms_online_off_online_off_component__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ../coms/online-off/online-off.component */ "./src/app/coms/online-off/online-off.component.ts");
/* harmony import */ var _coms_operational_help_operational_help_component__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ../coms/operational-help/operational-help.component */ "./src/app/coms/operational-help/operational-help.component.ts");
/* harmony import */ var _coms_opportunity_list_opportunity_list_component__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ../coms/opportunity-list/opportunity-list.component */ "./src/app/coms/opportunity-list/opportunity-list.component.ts");
/* harmony import */ var _coms_optimization_brand_optimization_brand_component__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ../coms/optimization-brand/optimization-brand.component */ "./src/app/coms/optimization-brand/optimization-brand.component.ts");
/* harmony import */ var _coms_pay_fail_pay_fail_component__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ../coms/pay-fail/pay-fail.component */ "./src/app/coms/pay-fail/pay-fail.component.ts");
/* harmony import */ var _coms_pay_success_pay_success_component__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ../coms/pay-success/pay-success.component */ "./src/app/coms/pay-success/pay-success.component.ts");
/* harmony import */ var _coms_pay_way_pay_way_component__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ../coms/pay-way/pay-way.component */ "./src/app/coms/pay-way/pay-way.component.ts");
/* harmony import */ var _coms_peripheral_info_peripheral_info_component__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ../coms/peripheral-info/peripheral-info.component */ "./src/app/coms/peripheral-info/peripheral-info.component.ts");
/* harmony import */ var _coms_post_and_eitor_hiddenele_component__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ../coms/post-and-eitor/hiddenele.component */ "./src/app/coms/post-and-eitor/hiddenele.component.ts");
/* harmony import */ var _coms_post_and_eitor_post_and_eitor_component__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ../coms/post-and-eitor/post-and-eitor.component */ "./src/app/coms/post-and-eitor/post-and-eitor.component.ts");
/* harmony import */ var _coms_post_and_eitor_textArea_page__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ../coms/post-and-eitor/textArea.page */ "./src/app/coms/post-and-eitor/textArea.page.ts");
/* harmony import */ var _coms_post_edit_form_post_edit_form_component__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./../coms/post-edit-form/post-edit-form.component */ "./src/app/coms/post-edit-form/post-edit-form.component.ts");
/* harmony import */ var _coms_poster_call_poster_call_component__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ../coms/poster-call/poster-call.component */ "./src/app/coms/poster-call/poster-call.component.ts");
/* harmony import */ var _coms_poster_poster_component__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ../coms/poster/poster.component */ "./src/app/coms/poster/poster.component.ts");
/* harmony import */ var _coms_presales_business_opt_presales_business_opt_component__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ../coms/presales-business-opt/presales-business-opt.component */ "./src/app/coms/presales-business-opt/presales-business-opt.component.ts");
/* harmony import */ var _coms_presales_information_presales_information_component__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ../coms/presales-information/presales-information.component */ "./src/app/coms/presales-information/presales-information.component.ts");
/* harmony import */ var _coms_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ../coms/progress-bar/progress-bar.component */ "./src/app/coms/progress-bar/progress-bar.component.ts");
/* harmony import */ var _coms_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ../coms/project-list/project-list.component */ "./src/app/coms/project-list/project-list.component.ts");
/* harmony import */ var _coms_prompt_map_prompt_map_component__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ../coms/prompt-map/prompt-map.component */ "./src/app/coms/prompt-map/prompt-map.component.ts");
/* harmony import */ var _coms_publish_site_type_publish_site_type_component__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ../coms/publish-site-type/publish-site-type.component */ "./src/app/coms/publish-site-type/publish-site-type.component.ts");
/* harmony import */ var _coms_py_customer_list_py_customer_list_component__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ../coms/py-customer-list/py-customer-list.component */ "./src/app/coms/py-customer-list/py-customer-list.component.ts");
/* harmony import */ var _coms_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./../coms/qrcode/qrcode.component */ "./src/app/coms/qrcode/qrcode.component.ts");
/* harmony import */ var _coms_quotation_remark_quotation_remark_component__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./../coms/quotation-remark/quotation-remark.component */ "./src/app/coms/quotation-remark/quotation-remark.component.ts");
/* harmony import */ var _coms_quote_info_quote_info_component__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ../coms/quote-info/quote-info.component */ "./src/app/coms/quote-info/quote-info.component.ts");
/* harmony import */ var _coms_ranking_modal_ranking_modal_component__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ../coms/ranking-modal/ranking-modal.component */ "./src/app/coms/ranking-modal/ranking-modal.component.ts");
/* harmony import */ var _coms_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ../coms/ranking/ranking.component */ "./src/app/coms/ranking/ranking.component.ts");
/* harmony import */ var _coms_recommand_by_customer_recommand_by_customer_component__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ../coms/recommand-by-customer/recommand-by-customer.component */ "./src/app/coms/recommand-by-customer/recommand-by-customer.component.ts");
/* harmony import */ var _coms_recommand_info_recommand_info_component__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ../coms/recommand-info/recommand-info.component */ "./src/app/coms/recommand-info/recommand-info.component.ts");
/* harmony import */ var _coms_recommand_query_recommand_query_component__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ../coms/recommand-query/recommand-query.component */ "./src/app/coms/recommand-query/recommand-query.component.ts");
/* harmony import */ var _coms_recommend_choose_all_recommend_choose_all_component__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./../coms/recommend-choose-all/recommend-choose-all.component */ "./src/app/coms/recommend-choose-all/recommend-choose-all.component.ts");
/* harmony import */ var _coms_recommend_choose_recommend_choose_component__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ../coms/recommend-choose/recommend-choose.component */ "./src/app/coms/recommend-choose/recommend-choose.component.ts");
/* harmony import */ var _coms_recommend_clientele_recommend_clientele_component__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ../coms/recommend-clientele/recommend-clientele.component */ "./src/app/coms/recommend-clientele/recommend-clientele.component.ts");
/* harmony import */ var _coms_recommend_clientlist_recommend_clientlist_component__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ../coms/recommend-clientlist/recommend-clientlist.component */ "./src/app/coms/recommend-clientlist/recommend-clientlist.component.ts");
/* harmony import */ var _coms_recommend_data_recommend_data_component__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ../coms/recommend-data/recommend-data.component */ "./src/app/coms/recommend-data/recommend-data.component.ts");
/* harmony import */ var _coms_recommend_datum_recommend_datum_component__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ../coms/recommend-datum/recommend-datum.component */ "./src/app/coms/recommend-datum/recommend-datum.component.ts");
/* harmony import */ var _coms_recommend_detail_recommend_detail_component__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ../coms/recommend-detail/recommend-detail.component */ "./src/app/coms/recommend-detail/recommend-detail.component.ts");
/* harmony import */ var _coms_recommend_information_list_recommend_information_list_component__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ../coms/recommend-information-list/recommend-information-list.component */ "./src/app/coms/recommend-information-list/recommend-information-list.component.ts");
/* harmony import */ var _coms_recommend_list_recommend_list_component__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ../coms/recommend-list/recommend-list.component */ "./src/app/coms/recommend-list/recommend-list.component.ts");
/* harmony import */ var _coms_recommend_modal_recommend_modal_component__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ../coms/recommend-modal/recommend-modal.component */ "./src/app/coms/recommend-modal/recommend-modal.component.ts");
/* harmony import */ var _coms_recommend_record_list_recommend_record_list_component__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ../coms/recommend-record-list/recommend-record-list.component */ "./src/app/coms/recommend-record-list/recommend-record-list.component.ts");
/* harmony import */ var _coms_register_argument_page__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ../coms/register/argument.page */ "./src/app/coms/register/argument.page.ts");
/* harmony import */ var _coms_register_register_component__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ../coms/register/register.component */ "./src/app/coms/register/register.component.ts");
/* harmony import */ var _coms_registered_list_registered_list_component__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ../coms/registered-list/registered-list.component */ "./src/app/coms/registered-list/registered-list.component.ts");
/* harmony import */ var _coms_remarks_content_remarks_content_component__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ../coms/remarks-content/remarks-content.component */ "./src/app/coms/remarks-content/remarks-content.component.ts");
/* harmony import */ var _coms_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ../coms/remarks/remarks.component */ "./src/app/coms/remarks/remarks.component.ts");
/* harmony import */ var _coms_rent_compare_rent_compare_component__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ../coms/rent-compare/rent-compare.component */ "./src/app/coms/rent-compare/rent-compare.component.ts");
/* harmony import */ var _coms_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ../coms/search-input/search-input.component */ "./src/app/coms/search-input/search-input.component.ts");
/* harmony import */ var _coms_search_search_component__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ../coms/search/search.component */ "./src/app/coms/search/search.component.ts");
/* harmony import */ var _coms_service_agreement_checked_service_agreement_checked_component__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ../coms/service-agreement-checked/service-agreement-checked.component */ "./src/app/coms/service-agreement-checked/service-agreement-checked.component.ts");
/* harmony import */ var _coms_service_brief_service_brief_component__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ../coms/service-brief/service-brief.component */ "./src/app/coms/service-brief/service-brief.component.ts");
/* harmony import */ var _coms_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ../coms/service-details/service-details.component */ "./src/app/coms/service-details/service-details.component.ts");
/* harmony import */ var _coms_service_evaluation_service_evaluation_component__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ../coms/service-evaluation/service-evaluation.component */ "./src/app/coms/service-evaluation/service-evaluation.component.ts");
/* harmony import */ var _coms_service_module_service_module_component__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ../coms/service-module/service-module.component */ "./src/app/coms/service-module/service-module.component.ts");
/* harmony import */ var _coms_service_quote_salesman_service_quote_salesman_component__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./../coms/service-quote-salesman/service-quote-salesman.component */ "./src/app/coms/service-quote-salesman/service-quote-salesman.component.ts");
/* harmony import */ var _coms_service_quote_service_quote_component__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./../coms/service-quote/service-quote.component */ "./src/app/coms/service-quote/service-quote.component.ts");
/* harmony import */ var _coms_settings_page_about_us_page__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ../coms/settings-page/about-us.page */ "./src/app/coms/settings-page/about-us.page.ts");
/* harmony import */ var _coms_settings_page_settings_page__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ../coms/settings-page/settings.page */ "./src/app/coms/settings-page/settings.page.ts");
/* harmony import */ var _coms_share_page_share_page_component__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ../coms/share-page/share-page.component */ "./src/app/coms/share-page/share-page.component.ts");
/* harmony import */ var _coms_show_list_show_list_component__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ../coms/show-list/show-list.component */ "./src/app/coms/show-list/show-list.component.ts");
/* harmony import */ var _coms_show_phone_modal_show_phone_modal_component__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ../coms/show-phone-modal/show-phone-modal.component */ "./src/app/coms/show-phone-modal/show-phone-modal.component.ts");
/* harmony import */ var _coms_sift_filter_sift_filter_component__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ../coms/sift-filter/sift-filter.component */ "./src/app/coms/sift-filter/sift-filter.component.ts");
/* harmony import */ var _coms_sift_sift_component__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ../coms/sift/sift.component */ "./src/app/coms/sift/sift.component.ts");
/* harmony import */ var _coms_sign_offer_sign_offer_component__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ../coms/sign-offer/sign-offer.component */ "./src/app/coms/sign-offer/sign-offer.component.ts");
/* harmony import */ var _coms_signing_on_signing_on_component__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ../coms/signing-on/signing-on.component */ "./src/app/coms/signing-on/signing-on.component.ts");
/* harmony import */ var _coms_slides_imgage_img_slide_page__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ../coms/slides-imgage/img-slide.page */ "./src/app/coms/slides-imgage/img-slide.page.ts");
/* harmony import */ var _coms_slides_imgage_slides_imgage_component__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ../coms/slides-imgage/slides-imgage.component */ "./src/app/coms/slides-imgage/slides-imgage.component.ts");
/* harmony import */ var _coms_spin_spin_component__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ../coms/spin/spin.component */ "./src/app/coms/spin/spin.component.ts");
/* harmony import */ var _coms_statistics_customer_intention_statistics_customer_intention_component__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ../coms/statistics-customer-intention/statistics-customer-intention.component */ "./src/app/coms/statistics-customer-intention/statistics-customer-intention.component.ts");
/* harmony import */ var _coms_store_consultant_store_consultant_component__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ../coms/store-consultant/store-consultant.component */ "./src/app/coms/store-consultant/store-consultant.component.ts");
/* harmony import */ var _coms_store_list_store_list_component__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ../coms/store-list/store-list.component */ "./src/app/coms/store-list/store-list.component.ts");
/* harmony import */ var _coms_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ../coms/submit-form/submit-form.component */ "./src/app/coms/submit-form/submit-form.component.ts");
/* harmony import */ var _coms_success_investment_success_investment_component__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ../coms/success-investment/success-investment.component */ "./src/app/coms/success-investment/success-investment.component.ts");
/* harmony import */ var _coms_support_facilities_facilty_page__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ../coms/support-facilities/facilty.page */ "./src/app/coms/support-facilities/facilty.page.ts");
/* harmony import */ var _coms_system_news_system_news_component__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ../coms/system-news/system-news.component */ "./src/app/coms/system-news/system-news.component.ts");
/* harmony import */ var _coms_tips_tips_component__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ../coms/tips/tips.component */ "./src/app/coms/tips/tips.component.ts");
/* harmony import */ var _coms_tiptitle_tiptitle_component__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ../coms/tiptitle/tiptitle.component */ "./src/app/coms/tiptitle/tiptitle.component.ts");
/* harmony import */ var _coms_title_title_component__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ../coms/title/title.component */ "./src/app/coms/title/title.component.ts");
/* harmony import */ var _coms_to_app_to_app_component__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ../coms/to-app/to-app.component */ "./src/app/coms/to-app/to-app.component.ts");
/* harmony import */ var _coms_top_tab_top_tab_component__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ../coms/top-tab/top-tab.component */ "./src/app/coms/top-tab/top-tab.component.ts");
/* harmony import */ var _coms_top_tips_top_tips_component__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ../coms/top-tips/top-tips.component */ "./src/app/coms/top-tips/top-tips.component.ts");
/* harmony import */ var _coms_transfer_detail_transfer_detail_component__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./../coms/transfer-detail/transfer-detail.component */ "./src/app/coms/transfer-detail/transfer-detail.component.ts");
/* harmony import */ var _coms_upload_image_img_page__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ../coms/upload-image/img.page */ "./src/app/coms/upload-image/img.page.ts");
/* harmony import */ var _coms_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ../coms/upload-image/upload-image.component */ "./src/app/coms/upload-image/upload-image.component.ts");
/* harmony import */ var _coms_url_url_component__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./../coms/url/url.component */ "./src/app/coms/url/url.component.ts");
/* harmony import */ var _coms_verify_list_verify_list_component__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ../coms/verify-list/verify-list.component */ "./src/app/coms/verify-list/verify-list.component.ts");
/* harmony import */ var _coms_video_video_component__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./../coms/video/video.component */ "./src/app/coms/video/video.component.ts");
/* harmony import */ var _coms_voice_voice_component__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ../coms/voice/voice.component */ "./src/app/coms/voice/voice.component.ts");
/* harmony import */ var _coms_way_skills_way_skills_component__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ../coms/way-skills/way-skills.component */ "./src/app/coms/way-skills/way-skills.component.ts");
/* harmony import */ var _coms_work_center_work_center_component__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ../coms/work-center/work-center.component */ "./src/app/coms/work-center/work-center.component.ts");
/* harmony import */ var _coms_zoology_system_zoology_system_component__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ../coms/zoology-system/zoology-system.component */ "./src/app/coms/zoology-system/zoology-system.component.ts");
/* harmony import */ var _coms_address_show_map_show_map_page__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ../coms/address/show-map/show-map.page */ "./src/app/coms/address/show-map/show-map.page.ts");
/* harmony import */ var _coms_post_edit_form_common_submit_btn_common_submit_btn_component__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./../coms/post-edit-form/common-submit-btn/common-submit-btn.component */ "./src/app/coms/post-edit-form/common-submit-btn/common-submit-btn.component.ts");
/* harmony import */ var _coms_post_edit_form_modal_of_edit_more_info_modal_of_edit_more_info_component__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./../coms/post-edit-form/modal-of-edit-more-info/modal-of-edit-more-info.component */ "./src/app/coms/post-edit-form/modal-of-edit-more-info/modal-of-edit-more-info.component.ts");
/* harmony import */ var _coms_post_edit_form_modal_of_multiple_modal_of_multiple_component__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./../coms/post-edit-form/modal-of-multiple/modal-of-multiple.component */ "./src/app/coms/post-edit-form/modal-of-multiple/modal-of-multiple.component.ts");
/* harmony import */ var _coms_post_edit_form_modal_of_person_search_modal_of_person_search_component__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./../coms/post-edit-form/modal-of-person-search/modal-of-person-search.component */ "./src/app/coms/post-edit-form/modal-of-person-search/modal-of-person-search.component.ts");
/* harmony import */ var _coms_post_edit_form_modal_of_person_select_modal_of_person_select_component__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! ./../coms/post-edit-form/modal-of-person-select/modal-of-person-select.component */ "./src/app/coms/post-edit-form/modal-of-person-select/modal-of-person-select.component.ts");
/* harmony import */ var _coms_post_edit_form_modal_of_select_modal_of_select_component__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! ./../coms/post-edit-form/modal-of-select/modal-of-select.component */ "./src/app/coms/post-edit-form/modal-of-select/modal-of-select.component.ts");
/* harmony import */ var _coms_signing_on_signing_pay_signing_pay_component__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(/*! ../coms/signing-on/signing-pay/signing-pay.component */ "./src/app/coms/signing-on/signing-pay/signing-pay.component.ts");
/* harmony import */ var _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(/*! ../route/entry/nav-one/nav-one.component */ "./src/app/route/entry/nav-one/nav-one.component.ts");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
/* harmony import */ var _coms_inquiry_page_modal_inquiry_page_modal_component__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(/*! ../coms/inquiry-page-modal/inquiry-page-modal.component */ "./src/app/coms/inquiry-page-modal/inquiry-page-modal.component.ts");
/* harmony import */ var _coms_hivideo_hivideo_component__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(/*! ../coms/hivideo/hivideo.component */ "./src/app/coms/hivideo/hivideo.component.ts");
/* harmony import */ var _coms_other_service_list_other_service_list_component__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(/*! ../coms/other-service-list/other-service-list.component */ "./src/app/coms/other-service-list/other-service-list.component.ts");
/* harmony import */ var _coms_general_head_count_shop_general_head_count_shop_component__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(/*! ../coms/general-head-count-shop/general-head-count-shop.component */ "./src/app/coms/general-head-count-shop/general-head-count-shop.component.ts");
/* harmony import */ var _coms_recommend_service_list_recommend_service_list_component__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(/*! ../coms/recommend-service-list/recommend-service-list.component */ "./src/app/coms/recommend-service-list/recommend-service-list.component.ts");
/* harmony import */ var _coms_mobile_phone_verification_mobile_phone_verification_component__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(/*! ../coms/mobile-phone-verification/mobile-phone-verification.component */ "./src/app/coms/mobile-phone-verification/mobile-phone-verification.component.ts");
/* harmony import */ var _coms_button_nav_default_msg_button_nav_default_msg_component__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(/*! ../coms/button-nav-default-msg/button-nav-default-msg.component */ "./src/app/coms/button-nav-default-msg/button-nav-default-msg.component.ts");
/* harmony import */ var _coms_register_privacyPolicy__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(/*! ../coms/register/privacyPolicy */ "./src/app/coms/register/privacyPolicy.ts");
/* harmony import */ var _coms_recommend_total_recommend_total_component__WEBPACK_IMPORTED_MODULE_243__ = __webpack_require__(/*! ../coms/recommend-total/recommend-total.component */ "./src/app/coms/recommend-total/recommend-total.component.ts");
/* harmony import */ var _performance_detail_header_performance_detail_header_component__WEBPACK_IMPORTED_MODULE_244__ = __webpack_require__(/*! ../performance-detail-header/performance-detail-header.component */ "./src/app/performance-detail-header/performance-detail-header.component.ts");
/* harmony import */ var _performance_detail_list_performance_detail_list_component__WEBPACK_IMPORTED_MODULE_245__ = __webpack_require__(/*! ../performance-detail-list/performance-detail-list.component */ "./src/app/performance-detail-list/performance-detail-list.component.ts");
/* harmony import */ var _coms_my_bicon_links_style_my_bicon_links_style_component__WEBPACK_IMPORTED_MODULE_246__ = __webpack_require__(/*! ../coms/my-bicon-links-style/my-bicon-links-style.component */ "./src/app/coms/my-bicon-links-style/my-bicon-links-style.component.ts");
/* harmony import */ var _coms_my_bicon_modal_my_bicon_modal_component__WEBPACK_IMPORTED_MODULE_247__ = __webpack_require__(/*! ../coms/my-bicon-modal/my-bicon-modal.component */ "./src/app/coms/my-bicon-modal/my-bicon-modal.component.ts");
/* harmony import */ var _coms_performance_total_performance_total_component__WEBPACK_IMPORTED_MODULE_248__ = __webpack_require__(/*! ../coms/performance-total/performance-total.component */ "./src/app/coms/performance-total/performance-total.component.ts");
/* harmony import */ var _coms_two_link_style_two_link_style_component__WEBPACK_IMPORTED_MODULE_249__ = __webpack_require__(/*! ../coms/two-link-style/two-link-style.component */ "./src/app/coms/two-link-style/two-link-style.component.ts");
/* harmony import */ var _coms_poster_sharing_poster_sharing_component__WEBPACK_IMPORTED_MODULE_250__ = __webpack_require__(/*! ../coms/poster-sharing/poster-sharing.component */ "./src/app/coms/poster-sharing/poster-sharing.component.ts");



























































































































































































































































var routes = [
    {
        path: 'settingsPage',
        component: _coms_settings_page_settings_page__WEBPACK_IMPORTED_MODULE_191__["SettingsPage"]
    }, {
        path: 'aboutUsPage',
        component: _coms_settings_page_about_us_page__WEBPACK_IMPORTED_MODULE_190__["AboutUsPage"]
    }, {
        path: 'navSearch',
        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_26__["SearchHistoryPage"]
    }, {
        path: 'chatOnline',
        component: src_app_coms_chatonline_chatonline_component__WEBPACK_IMPORTED_MODULE_9__["ChatonlineComponent"]
    },
    {
        path: 'navUrl',
        component: _coms_url_url_component__WEBPACK_IMPORTED_MODULE_218__["UrlComponent"]
    },
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_234__["Tab4Page"]
    },
    {
        path: 'nav1',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav2',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav3',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav4',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav5',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav6',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav7',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav8',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav9',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav10',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav11',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav12',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav13',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav14',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav15',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav16',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav17',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav18',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav19',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav20',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: 'nav21',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    },
    {
        path: '**',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_233__["NavOneComponent"]
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _coms_coms_module__WEBPACK_IMPORTED_MODULE_24__["ComsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdMobileModule"].forRoot()
                // RouterModule.forChild([{ path: '', component: Tab1Page }])
            ],
            declarations: [
                _tab4_page__WEBPACK_IMPORTED_MODULE_234__["Tab4Page"],
            ],
            entryComponents: [
                _coms_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_63__["CarouselComponent"],
                _coms_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_134__["NewsListComponent"],
                _coms_icon_link_icon_link_component__WEBPACK_IMPORTED_MODULE_110__["IconLinkComponent"],
                _coms_sift_sift_component__WEBPACK_IMPORTED_MODULE_196__["SiftComponent"],
                _coms_mine_mine_component__WEBPACK_IMPORTED_MODULE_130__["MineComponent"],
                _coms_login_login_component__WEBPACK_IMPORTED_MODULE_122__["LoginComponent"],
                _coms_register_register_component__WEBPACK_IMPORTED_MODULE_176__["RegisterComponent"],
                _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_70__["ChooseCityComponent"],
                _coms_change_pwd_change_pwd_component__WEBPACK_IMPORTED_MODULE_68__["ChangePwdComponent"],
                _coms_detail_detail_component__WEBPACK_IMPORTED_MODULE_98__["DetailComponent"],
                _coms_show_list_show_list_component__WEBPACK_IMPORTED_MODULE_193__["ShowListComponent"],
                _coms_edit_edit_component__WEBPACK_IMPORTED_MODULE_99__["EditComponent"],
                _coms_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_152__["ProjectListComponent"],
                _coms_basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_38__["BasicListComponent"],
                _coms_detail_list_detail_list_component__WEBPACK_IMPORTED_MODULE_97__["DetailListComponent"],
                _coms_address_map_address_map_component__WEBPACK_IMPORTED_MODULE_29__["AddressMapComponent"],
                _coms_map_show_map_show_component__WEBPACK_IMPORTED_MODULE_126__["MapShowComponent"],
                _coms_edit_editnickname_page__WEBPACK_IMPORTED_MODULE_100__["EditNickNameComponent"],
                _coms_upload_image_img_page__WEBPACK_IMPORTED_MODULE_216__["ImgPage"],
                _coms_post_and_eitor_post_and_eitor_component__WEBPACK_IMPORTED_MODULE_144__["PostAndEitorComponent"],
                _coms_post_edit_form_post_edit_form_component__WEBPACK_IMPORTED_MODULE_146__["PostEditFormComponent"],
                _coms_call_call_component__WEBPACK_IMPORTED_MODULE_62__["CallComponent"],
                _coms_industry_modal_industry_modal_component__WEBPACK_IMPORTED_MODULE_112__["IndustryModalComponent"],
                _coms_city_modal_city_modal_component__WEBPACK_IMPORTED_MODULE_73__["CityModalComponent"],
                _coms_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_102__["ExampleListComponent"],
                _coms_store_list_store_list_component__WEBPACK_IMPORTED_MODULE_204__["StoreListComponent"],
                _coms_choose_type_choose_type_component__WEBPACK_IMPORTED_MODULE_72__["ChooseTypeComponent"],
                _coms_sift_filter_sift_filter_component__WEBPACK_IMPORTED_MODULE_195__["SiftFilterComponent"],
                _coms_column_tag_column_tag_component__WEBPACK_IMPORTED_MODULE_74__["ColumnTagComponent"],
                _coms_slides_imgage_img_slide_page__WEBPACK_IMPORTED_MODULE_199__["ImgSlidePage"],
                _coms_support_facilities_facilty_page__WEBPACK_IMPORTED_MODULE_207__["FaciltyPage"],
                _coms_slides_imgage_slides_imgage_component__WEBPACK_IMPORTED_MODULE_200__["SlidesImgageComponent"],
                _coms_logo_call_logo_call_component__WEBPACK_IMPORTED_MODULE_123__["LogoCallComponent"],
                _coms_block_link_block_link_component__WEBPACK_IMPORTED_MODULE_40__["BlockLinkComponent"],
                _coms_button_button_component__WEBPACK_IMPORTED_MODULE_61__["ButtonComponent"],
                _coms_bIcon_link_bIcon_link_component__WEBPACK_IMPORTED_MODULE_36__["BIconLinkComponent"],
                _coms_link_list_link_list_component__WEBPACK_IMPORTED_MODULE_120__["LinkListComponent"],
                _coms_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_217__["UploadImageComponent"],
                _coms_post_and_eitor_hiddenele_component__WEBPACK_IMPORTED_MODULE_143__["hiddeneleComponent"],
                _coms_button_nav_button_nav_component__WEBPACK_IMPORTED_MODULE_60__["ButtonNavComponent"],
                _coms_button_nav_one_button_nav_one_component__WEBPACK_IMPORTED_MODULE_57__["ButtonNavOneComponent"],
                _coms_button_nav_two_button_nav_two_component__WEBPACK_IMPORTED_MODULE_59__["ButtonNavTwoComponent"],
                _coms_button_nav_three_button_nav_three_component__WEBPACK_IMPORTED_MODULE_58__["ButtonNavThreeComponent"],
                _coms_button_nav_four_button_nav_four_component__WEBPACK_IMPORTED_MODULE_56__["ButtonNavFourComponent"],
                _coms_button_nav_five_button_nav_five_component__WEBPACK_IMPORTED_MODULE_55__["ButtonNavFiveComponent"],
                _coms_button_nav_default_button_nav_default_component__WEBPACK_IMPORTED_MODULE_54__["ButtonNavDefaultComponent"],
                _coms_button_nav_default_msg_button_nav_default_msg_component__WEBPACK_IMPORTED_MODULE_241__["ButtonNavDefaultMsgComponent"],
                _coms_address_address_page__WEBPACK_IMPORTED_MODULE_30__["AddressPage"],
                _coms_address_show_map_show_map_page__WEBPACK_IMPORTED_MODULE_225__["ShowMapPage"],
                _coms_new_data_map_new_data_map_page__WEBPACK_IMPORTED_MODULE_132__["NewDataMapPage"],
                _coms_transfer_detail_transfer_detail_component__WEBPACK_IMPORTED_MODULE_215__["TransferDetailComponent"],
                _coms_video_video_component__WEBPACK_IMPORTED_MODULE_220__["VideoComponent"],
                _coms_post_and_eitor_textArea_page__WEBPACK_IMPORTED_MODULE_145__["textAreaPage"],
                _coms_list_list_component__WEBPACK_IMPORTED_MODULE_121__["ListComponent"],
                _coms_register_argument_page__WEBPACK_IMPORTED_MODULE_175__["ArgumentPage"],
                _coms_register_privacyPolicy__WEBPACK_IMPORTED_MODULE_242__["PrivacyPolicyPage"],
                _coms_search_search_component__WEBPACK_IMPORTED_MODULE_182__["SearchComponent"],
                _coms_settings_page_settings_page__WEBPACK_IMPORTED_MODULE_191__["SettingsPage"],
                _coms_settings_page_about_us_page__WEBPACK_IMPORTED_MODULE_190__["AboutUsPage"],
                _coms_title_title_component__WEBPACK_IMPORTED_MODULE_211__["TitleComponent"],
                _coms_help_transfer_siting_help_transfer_siting_component__WEBPACK_IMPORTED_MODULE_108__["HelpTransferSitingComponent"],
                _coms_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_35__["ArticleListComponent"],
                _coms_recommend_list_recommend_list_component__WEBPACK_IMPORTED_MODULE_172__["RecommendListComponent"],
                _coms_recommend_datum_recommend_datum_component__WEBPACK_IMPORTED_MODULE_169__["RecommendDatumComponent"],
                _coms_operational_help_operational_help_component__WEBPACK_IMPORTED_MODULE_136__["OperationalHelpComponent"],
                _coms_tiptitle_tiptitle_component__WEBPACK_IMPORTED_MODULE_210__["TiptitleComponent"],
                _coms_filter_recommend_list_filter_recommend_list_component__WEBPACK_IMPORTED_MODULE_104__["FilterRecommendListComponent"],
                _coms_poster_poster_component__WEBPACK_IMPORTED_MODULE_148__["PosterComponent"],
                _coms_poster_call_poster_call_component__WEBPACK_IMPORTED_MODULE_147__["PosterCallComponent"],
                _coms_mine_list_mine_list_component__WEBPACK_IMPORTED_MODULE_129__["MineListComponent"],
                _coms_data_map_data_map_component__WEBPACK_IMPORTED_MODULE_89__["DataMapComponent"],
                _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_26__["SearchHistoryPage"],
                _coms_case_case_component__WEBPACK_IMPORTED_MODULE_67__["CaseComponent"],
                _coms_counselor_list_counselor_list_component__WEBPACK_IMPORTED_MODULE_82__["CounselorListComponent"],
                _coms_store_consultant_store_consultant_component__WEBPACK_IMPORTED_MODULE_203__["StoreConsultantComponent"],
                _coms_news_carousel_news_carousel_component__WEBPACK_IMPORTED_MODULE_133__["NewsCarouselComponent"],
                _coms_brand_brand_component__WEBPACK_IMPORTED_MODULE_49__["BrandComponent"],
                _coms_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_77__["ConsultantListComponent"],
                _coms_counselor_counselor_component__WEBPACK_IMPORTED_MODULE_83__["CounselorComponent"],
                _coms_top_tab_top_tab_component__WEBPACK_IMPORTED_MODULE_213__["TopTabComponent"],
                _coms_fixed_tab_fixed_tab_component__WEBPACK_IMPORTED_MODULE_106__["FixedTabComponent"],
                _coms_service_evaluation_service_evaluation_component__WEBPACK_IMPORTED_MODULE_186__["ServiceEvaluationComponent"],
                _coms_tips_tips_component__WEBPACK_IMPORTED_MODULE_209__["TipsComponent"],
                _coms_way_skills_way_skills_component__WEBPACK_IMPORTED_MODULE_222__["WaySkillsComponent"],
                _coms_line_line_component__WEBPACK_IMPORTED_MODULE_119__["LineComponent"],
                _coms_voice_voice_component__WEBPACK_IMPORTED_MODULE_221__["VoiceComponent"],
                _coms_service_brief_service_brief_component__WEBPACK_IMPORTED_MODULE_184__["ServiceBriefComponent"],
                _coms_system_news_system_news_component__WEBPACK_IMPORTED_MODULE_208__["SystemNewsComponent"],
                _coms_service_quote_service_quote_component__WEBPACK_IMPORTED_MODULE_189__["ServiceQuoteComponent"],
                _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_107__["FooterLogoComponent"],
                _coms_quotation_remark_quotation_remark_component__WEBPACK_IMPORTED_MODULE_157__["QuotationRemarkComponent"],
                _coms_service_quote_salesman_service_quote_salesman_component__WEBPACK_IMPORTED_MODULE_188__["ServiceQuoteSalesmanComponent"],
                _coms_common_btn_common_btn_component__WEBPACK_IMPORTED_MODULE_75__["CommonBtnComponent"],
                _coms_chat_invite_chat_invite_component__WEBPACK_IMPORTED_MODULE_69__["ChatInviteComponent"],
                _coms_top_tips_top_tips_component__WEBPACK_IMPORTED_MODULE_214__["TopTipsComponent"],
                _coms_pay_way_pay_way_component__WEBPACK_IMPORTED_MODULE_141__["PayWayComponent"],
                _coms_pay_success_pay_success_component__WEBPACK_IMPORTED_MODULE_140__["PaySuccessComponent"],
                _coms_pay_fail_pay_fail_component__WEBPACK_IMPORTED_MODULE_139__["PayFailComponent"],
                _coms_service_agreement_checked_service_agreement_checked_component__WEBPACK_IMPORTED_MODULE_183__["ServiceAgreementCheckedComponent"],
                src_app_coms_invitation_to_shop_invitation_to_shop_component__WEBPACK_IMPORTED_MODULE_16__["InvitationToShopComponent"],
                src_app_coms_footer_protocol_footer_protocol_component__WEBPACK_IMPORTED_MODULE_12__["FooterProtocolComponent"],
                src_app_coms_chatonline_chatonline_component__WEBPACK_IMPORTED_MODULE_9__["ChatonlineComponent"],
                src_app_coms_customer_evaluation_customer_evaluation_component__WEBPACK_IMPORTED_MODULE_17__["CustomerEvaluationComponent"],
                src_app_coms_protocol_template_protocol_template_component__WEBPACK_IMPORTED_MODULE_15__["ProtocolTemplateComponent"],
                src_app_coms_promotion_record_list_promotion_record_list_component__WEBPACK_IMPORTED_MODULE_20__["PromotionRecordListComponent"],
                src_app_coms_customer_service_customer_service_component__WEBPACK_IMPORTED_MODULE_14__["CustomerServiceComponent"],
                src_app_coms_exclusive_consultant_exclusive_consultant_component__WEBPACK_IMPORTED_MODULE_19__["ExclusiveConsultantComponent"],
                src_app_coms_browsing_volume_browsing_volume_component__WEBPACK_IMPORTED_MODULE_13__["BrowsingVolumeComponent"],
                src_app_coms_promotion_of_statistics_promotion_of_statistics_component__WEBPACK_IMPORTED_MODULE_21__["PromotionOfStatisticsComponent"],
                _coms_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_205__["SubmitFormComponent"],
                src_app_coms_member_status_member_status_component__WEBPACK_IMPORTED_MODULE_10__["MemberStatusComponent"],
                _coms_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_160__["RankingComponent"],
                _coms_background_style_background_style_component__WEBPACK_IMPORTED_MODULE_37__["BackgroundStyleComponent"],
                _coms_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_151__["ProgressBarComponent"],
                _coms_business_summary_business_summary_component__WEBPACK_IMPORTED_MODULE_52__["BusinessSummaryComponent"],
                _coms_prompt_map_prompt_map_component__WEBPACK_IMPORTED_MODULE_153__["PromptMapComponent"],
                _coms_to_app_to_app_component__WEBPACK_IMPORTED_MODULE_212__["ToAppComponent"],
                _coms_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_179__["RemarksComponent"],
                _coms_inner_title_inner_title_component__WEBPACK_IMPORTED_MODULE_116__["InnerTitleComponent"],
                _coms_verify_list_verify_list_component__WEBPACK_IMPORTED_MODULE_219__["VerifyListComponent"],
                _coms_last_contact_list_last_contact_list_component__WEBPACK_IMPORTED_MODULE_118__["LastContactListComponent"],
                _coms_py_customer_list_py_customer_list_component__WEBPACK_IMPORTED_MODULE_155__["PyCustomerListComponent"],
                _coms_branch_sheet_branch_sheet_component__WEBPACK_IMPORTED_MODULE_41__["BranchSheetComponent"],
                _coms_quote_info_quote_info_component__WEBPACK_IMPORTED_MODULE_158__["QuoteInfoComponent"],
                _coms_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_156__["QrcodeComponent"],
                src_app_coms_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_11__["SearchFilterComponent"],
                _coms_button_heap_button_heap_component__WEBPACK_IMPORTED_MODULE_53__["ButtonHeapComponent"],
                _coms_post_edit_form_modal_of_multiple_modal_of_multiple_component__WEBPACK_IMPORTED_MODULE_228__["ModalOfMultipleComponent"],
                _coms_information_hall_information_hall_component__WEBPACK_IMPORTED_MODULE_115__["InformationHallComponent"],
                _coms_job_manager_job_manager_component__WEBPACK_IMPORTED_MODULE_117__["JobManagerComponent"],
                _coms_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_181__["SearchInputComponent"],
                src_app_coms_my_achievement_chart_my_achievement_chart_component__WEBPACK_IMPORTED_MODULE_18__["MyAchievementChartComponent"],
                _coms_bicon_links_bicon_links_component__WEBPACK_IMPORTED_MODULE_39__["BiconLinksComponent"],
                _coms_case_remark_case_remark_component__WEBPACK_IMPORTED_MODULE_66__["CaseRemarkComponent"],
                _coms_post_edit_form_modal_of_person_select_modal_of_person_select_component__WEBPACK_IMPORTED_MODULE_230__["ModalOfPersonSelectComponent"],
                _coms_post_edit_form_modal_of_edit_more_info_modal_of_edit_more_info_component__WEBPACK_IMPORTED_MODULE_227__["ModalOfEditMoreInfoComponent"],
                _coms_post_edit_form_modal_of_person_search_modal_of_person_search_component__WEBPACK_IMPORTED_MODULE_229__["ModalOfPersonSearchComponent"],
                _coms_more_button_more_button_component__WEBPACK_IMPORTED_MODULE_131__["MoreButtonComponent"],
                _coms_advertise_play_advertise_play_component__WEBPACK_IMPORTED_MODULE_31__["AdvertisePlayComponent"],
                _coms_post_edit_form_common_submit_btn_common_submit_btn_component__WEBPACK_IMPORTED_MODULE_226__["CommonSubmitBtnComponent"],
                _coms_analysis_chart_analysis_chart_component__WEBPACK_IMPORTED_MODULE_33__["AnalysisChartComponent"],
                _coms_industry_analysis_industry_analysis_component__WEBPACK_IMPORTED_MODULE_111__["IndustryAnalysisComponent"],
                _coms_rent_compare_rent_compare_component__WEBPACK_IMPORTED_MODULE_180__["RentCompareComponent"],
                _coms_customer_source_customer_source_component__WEBPACK_IMPORTED_MODULE_87__["CustomerSourceComponent"],
                _coms_peripheral_info_peripheral_info_component__WEBPACK_IMPORTED_MODULE_142__["PeripheralInfoComponent"],
                _coms_horizontal_list_horizontal_list_component__WEBPACK_IMPORTED_MODULE_109__["HorizontalListComponent"],
                _coms_presales_information_presales_information_component__WEBPACK_IMPORTED_MODULE_150__["PresalesInformationComponent"],
                _coms_extend_picture_extend_picture_component__WEBPACK_IMPORTED_MODULE_103__["ExtendPictureComponent"],
                _coms_sign_offer_sign_offer_component__WEBPACK_IMPORTED_MODULE_197__["SignOfferComponent"],
                _coms_zoology_system_zoology_system_component__WEBPACK_IMPORTED_MODULE_224__["ZoologySystemComponent"],
                _coms_finishcompany_list_finishcompany_list_component__WEBPACK_IMPORTED_MODULE_105__["FinishcompanyListComponent"],
                _coms_recommend_clientele_recommend_clientele_component__WEBPACK_IMPORTED_MODULE_166__["RecommendClienteleComponent"],
                _coms_recommend_clientlist_recommend_clientlist_component__WEBPACK_IMPORTED_MODULE_167__["RecommendClientlistComponent"],
                _coms_decoration_off_decoration_off_component__WEBPACK_IMPORTED_MODULE_93__["DecorationOffComponent"],
                _coms_online_off_online_off_component__WEBPACK_IMPORTED_MODULE_135__["OnlineOffComponent"],
                _coms_recommend_data_recommend_data_component__WEBPACK_IMPORTED_MODULE_168__["RecommendDataComponent"],
                _coms_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_42__["BrandListComponent"],
                _coms_attract_list_attract_list_component__WEBPACK_IMPORTED_MODULE_48__["AttractListComponent"],
                _coms_publish_title_publish_title_component__WEBPACK_IMPORTED_MODULE_43__["PublishTitleComponent"],
                _coms_investment_list_investment_list_component__WEBPACK_IMPORTED_MODULE_44__["InvestmentListComponent"],
                _coms_open_member_open_member_component__WEBPACK_IMPORTED_MODULE_45__["OpenMemberComponent"],
                _coms_recommend_message_recommend_message_component__WEBPACK_IMPORTED_MODULE_46__["RecommendMessageComponent"],
                _coms_myreal_estate_myreal_estate_component__WEBPACK_IMPORTED_MODULE_47__["MyrealEstateComponent"],
                _coms_contract_off_contract_off_component__WEBPACK_IMPORTED_MODULE_80__["ContractOffComponent"],
                _coms_optimization_brand_optimization_brand_component__WEBPACK_IMPORTED_MODULE_138__["OptimizationBrandComponent"],
                _coms_managevideo_managevideo_component__WEBPACK_IMPORTED_MODULE_125__["ManagevideoComponent"],
                _coms_remarks_content_remarks_content_component__WEBPACK_IMPORTED_MODULE_178__["RemarksContentComponent"],
                _coms_post_edit_form_modal_of_select_modal_of_select_component__WEBPACK_IMPORTED_MODULE_231__["ModalOfSelectComponent"],
                _coms_copy_to_paste_btn_copy_to_paste_btn_component__WEBPACK_IMPORTED_MODULE_81__["CopyToPasteBtnComponent"],
                _coms_department_introduction_department_introduction_component__WEBPACK_IMPORTED_MODULE_95__["DepartmentIntroductionComponent"],
                _coms_department_employee_department_employee_component__WEBPACK_IMPORTED_MODULE_94__["DepartmentEmployeeComponent"],
                _coms_business_city_business_city_component__WEBPACK_IMPORTED_MODULE_50__["BusinessCityComponent"],
                _coms_dept_manager_dept_manager_component__WEBPACK_IMPORTED_MODULE_96__["DeptManagerComponent"],
                _coms_employee_manager_employee_manager_component__WEBPACK_IMPORTED_MODULE_101__["EmployeeManagerComponent"],
                _coms_contract_list_filter_contract_list_filter_component__WEBPACK_IMPORTED_MODULE_79__["ContractListFilterComponent"],
                _coms_contract_audit_detail_contract_audit_detail_component__WEBPACK_IMPORTED_MODULE_78__["ContractAuditDetailComponent"],
                _coms_share_page_share_page_component__WEBPACK_IMPORTED_MODULE_192__["SharePageComponent"],
                _coms_choose_department_choose_department_component__WEBPACK_IMPORTED_MODULE_71__["ChooseDepartmentComponent"],
                _coms_decoration_companies_decoration_companies_component__WEBPACK_IMPORTED_MODULE_92__["DecorationCompaniesComponent"],
                _coms_all_address_tag_all_address_tag_component__WEBPACK_IMPORTED_MODULE_32__["AllAddressTagComponent"],
                _coms_success_investment_success_investment_component__WEBPACK_IMPORTED_MODULE_206__["SuccessInvestmentComponent"],
                _coms_merchant_list_merchant_list_component__WEBPACK_IMPORTED_MODULE_128__["MerchantListComponent"],
                _coms_decorate_list_decorate_list_component__WEBPACK_IMPORTED_MODULE_90__["DecorateListComponent"],
                _coms_membership_service_membership_service_component__WEBPACK_IMPORTED_MODULE_127__["MembershipServiceComponent"],
                _coms_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_185__["ServiceDetailsComponent"],
                _coms_information_entry_information_entry_component__WEBPACK_IMPORTED_MODULE_114__["InformationEntryComponent"],
                _coms_decoration_banner_decoration_banner_component__WEBPACK_IMPORTED_MODULE_91__["DecorationBannerComponent"],
                _coms_companies_credential_companies_credential_component__WEBPACK_IMPORTED_MODULE_76__["CompaniesCredentialComponent"],
                _coms_custom_popover_custom_popover_component__WEBPACK_IMPORTED_MODULE_85__["CustomPopoverComponent"],
                _coms_publish_site_type_publish_site_type_component__WEBPACK_IMPORTED_MODULE_154__["PublishSiteTypeComponent"],
                _coms_data_map_entry_data_map_entry_component__WEBPACK_IMPORTED_MODULE_88__["DataMapEntryComponent"],
                _custom_search_bar_custom_search_bar_component__WEBPACK_IMPORTED_MODULE_25__["CustomSearchBarComponent"],
                src_app_coms_list_value_show_list_value_show_component__WEBPACK_IMPORTED_MODULE_22__["ListValueShowComponent"],
                _coms_signing_on_signing_on_component__WEBPACK_IMPORTED_MODULE_198__["SigningOnComponent"],
                _coms_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_86__["CustomerDetailsComponent"],
                _coms_case_list_case_list_component__WEBPACK_IMPORTED_MODULE_64__["CaseListComponent"],
                _coms_registered_list_registered_list_component__WEBPACK_IMPORTED_MODULE_177__["RegisteredListComponent"],
                _coms_service_module_service_module_component__WEBPACK_IMPORTED_MODULE_187__["ServiceModuleComponent"],
                _coms_manage_business_service_manage_business_service_component__WEBPACK_IMPORTED_MODULE_124__["ManageBusinessServiceComponent"],
                _coms_ranking_modal_ranking_modal_component__WEBPACK_IMPORTED_MODULE_159__["RankingModalComponent"],
                _coms_signing_on_signing_pay_signing_pay_component__WEBPACK_IMPORTED_MODULE_232__["SigningPayComponent"],
                _coms_work_center_work_center_component__WEBPACK_IMPORTED_MODULE_223__["WorkCenterComponent"],
                _coms_spin_spin_component__WEBPACK_IMPORTED_MODULE_201__["SpinComponent"],
                _coms_custom_phone_custom_phone_component__WEBPACK_IMPORTED_MODULE_84__["CustomPhoneComponent"],
                src_app_coms_achievement_achievement_component__WEBPACK_IMPORTED_MODULE_23__["AchievementComponent"],
                _coms_opportunity_list_opportunity_list_component__WEBPACK_IMPORTED_MODULE_137__["OpportunityListComponent"],
                _coms_recommend_record_list_recommend_record_list_component__WEBPACK_IMPORTED_MODULE_174__["RecommendRecordListComponent"],
                _coms_business_modal_business_modal_component__WEBPACK_IMPORTED_MODULE_51__["BusinessModalComponent"],
                _coms_recommend_choose_recommend_choose_component__WEBPACK_IMPORTED_MODULE_165__["RecommendChooseComponent"],
                _coms_recommend_choose_all_recommend_choose_all_component__WEBPACK_IMPORTED_MODULE_164__["RecommendChooseAllComponent"],
                _coms_recommand_query_recommand_query_component__WEBPACK_IMPORTED_MODULE_163__["RecommandQueryComponent"],
                _coms_presales_business_opt_presales_business_opt_component__WEBPACK_IMPORTED_MODULE_149__["PresalesBusinessOptComponent"],
                _coms_recommend_modal_recommend_modal_component__WEBPACK_IMPORTED_MODULE_173__["RecommendModalComponent"],
                _coms_accept_recommend_accept_recommend_component__WEBPACK_IMPORTED_MODULE_28__["AcceptRecommendComponent"],
                _coms_show_phone_modal_show_phone_modal_component__WEBPACK_IMPORTED_MODULE_194__["ShowPhoneModalComponent"],
                _coms_information_card_information_card_component__WEBPACK_IMPORTED_MODULE_113__["InformationCardComponent"],
                _coms_recommand_by_customer_recommand_by_customer_component__WEBPACK_IMPORTED_MODULE_161__["RecommandByCustomerComponent"],
                _coms_recommend_detail_recommend_detail_component__WEBPACK_IMPORTED_MODULE_170__["RecommendDetailComponent"],
                _coms_recommand_info_recommand_info_component__WEBPACK_IMPORTED_MODULE_162__["RecommandInfoComponent"],
                _coms_case_recommed_list_case_recommed_list_component__WEBPACK_IMPORTED_MODULE_65__["CaseRecommedListComponent"],
                _coms_app_general_list_app_general_list_component__WEBPACK_IMPORTED_MODULE_34__["AppGeneralListComponent"],
                _coms_recommend_information_list_recommend_information_list_component__WEBPACK_IMPORTED_MODULE_171__["RecommendInformationListComponent"],
                _coms_statistics_customer_intention_statistics_customer_intention_component__WEBPACK_IMPORTED_MODULE_202__["StatisticsCustomerIntentionComponent"],
                _coms_inquiry_page_modal_inquiry_page_modal_component__WEBPACK_IMPORTED_MODULE_235__["InquiryPageModalComponent"],
                _coms_hivideo_hivideo_component__WEBPACK_IMPORTED_MODULE_236__["HivideoComponent"],
                _coms_other_service_list_other_service_list_component__WEBPACK_IMPORTED_MODULE_237__["OtherServiceListComponent"],
                _coms_general_head_count_shop_general_head_count_shop_component__WEBPACK_IMPORTED_MODULE_238__["GeneralHeadCountShopComponent"],
                _coms_recommend_service_list_recommend_service_list_component__WEBPACK_IMPORTED_MODULE_239__["RecommendServiceListComponent"],
                _coms_mobile_phone_verification_mobile_phone_verification_component__WEBPACK_IMPORTED_MODULE_240__["MobilePhoneVerificationComponent"],
                _coms_adviser_info_adviser_info_component__WEBPACK_IMPORTED_MODULE_2__["AdviserInfoComponent"],
                _coms_recommend_total_recommend_total_component__WEBPACK_IMPORTED_MODULE_243__["RecommendTotalComponent"],
                _performance_detail_header_performance_detail_header_component__WEBPACK_IMPORTED_MODULE_244__["PerformanceDetailHeaderComponent"],
                _performance_detail_list_performance_detail_list_component__WEBPACK_IMPORTED_MODULE_245__["PerformanceDetailListComponent"],
                _coms_my_bicon_links_style_my_bicon_links_style_component__WEBPACK_IMPORTED_MODULE_246__["MyBiconLinksStyleComponent"],
                _coms_person_sign_person_sign_component__WEBPACK_IMPORTED_MODULE_1__["PersonSignComponent"],
                _coms_my_bicon_modal_my_bicon_modal_component__WEBPACK_IMPORTED_MODULE_247__["MyBiconModalComponent"],
                _coms_performance_total_performance_total_component__WEBPACK_IMPORTED_MODULE_248__["PerformanceTotalComponent"],
                _coms_two_link_style_two_link_style_component__WEBPACK_IMPORTED_MODULE_249__["TwoLinkStyleComponent"],
                _coms_poster_sharing_poster_sharing_component__WEBPACK_IMPORTED_MODULE_250__["PosterSharingComponent"]
            ]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
/* harmony import */ var src_app_shared_service_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/event.service */ "./src/app/shared/service/event.service.ts");
/* harmony import */ var _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../coms/choose-city/choose-city.component */ "./src/app/coms/choose-city/choose-city.component.ts");
/* harmony import */ var _coms_ranking_modal_ranking_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../coms/ranking-modal/ranking-modal.component */ "./src/app/coms/ranking-modal/ranking-modal.component.ts");
/* harmony import */ var _coms_share_page_share_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../coms/share-page/share-page.component */ "./src/app/coms/share-page/share-page.component.ts");
/* harmony import */ var _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/service/app-global.service */ "./src/app/shared/service/app-global.service.ts");
/* harmony import */ var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/service/http.service */ "./src/app/shared/service/http.service.ts");
/* harmony import */ var _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/service/map.baiduapi */ "./src/app/shared/service/map.baiduapi.ts");
/* harmony import */ var _shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../shared/service/tabs.service */ "./src/app/shared/service/tabs.service.ts");













var Tab4Page = /** @class */ (function () {
    function Tab4Page(http, route, router, appGlobalService, modalController, mapBaiduService, tabsService, eventService, actionSheet, // 必须有
    alertController) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.appGlobalService = appGlobalService;
        this.modalController = modalController;
        this.mapBaiduService = mapBaiduService;
        this.tabsService = tabsService;
        this.eventService = eventService;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.canRequest = true;
        this.params = '';
        this.isHeader = true;
        this.isGrayBg = false; // 默认背景为灰色
        this.showRefresher = false;
        this.showLoading = false;
        this.showWaterImg = false;
        // 位置对象
        this.positionInfo = {};
        this.showTopTab = false; // 是否显示顶部tab
        this.showSubTab = false; // 是否显示Subtab
        this.viewParams = {
            sessionId: localStorage.getItem('sessionId'),
            params: { code: JSON.parse(localStorage.getItem('position')).code }
        };
        this.showRefresh = false; // 是否显示刷新
        this.selectedSegment = 0;
        this.eventService.eventEmit.on("refreshTab4CanRequest", function (obj) {
            var reqTag = localStorage.getItem('refreshTab4CanRequestTag');
            if (reqTag !== undefined) {
                localStorage.removeItem('refreshTab4CanRequestTag');
                _this.canRequest = true;
            }
        });
    }
    Tab4Page.prototype.ngOnInit = function () {
        this.positionInfo = JSON.parse(localStorage.getItem('position'));
        this.openBackdrop = this.appGlobalService.openBackdrop;
        var that = this;
        this.eventService.eventEmit.on("appNav", function (obj) {
            console.log('app Tabs done');
            that.getViewData();
        });
        if (JSON.parse(localStorage.getItem('appNav'))) {
            that.getViewData();
        }
        this.eventService.eventEmit.on("tab4", function (obj) {
            console.log('eventEmit.on tab4');
            that.getViewData();
        });
    };
    Tab4Page.prototype.change = function (obj, indexTab) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.tagData.currentTab = indexTab;
            this.http.post('application/part', {
                viewId: obj.partLink.target,
                sessionId: localStorage.getItem("sessionId"),
                params: obj.partLink.params
            }, function (res) {
                if (res !== undefined && res != null) {
                    setTimeout(function () {
                        _this.tagData.currentData = JSON.parse(res.script);
                        localStorage.setItem("dataMapTopTabContainer", JSON.stringify(_this.tagData));
                        _this.eventService.eventEmit.emit('refreshTopTabContainer', 'refreshTopTabContainer');
                    }, 50);
                }
            });
        }
    };
    Tab4Page.prototype.getViewData = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            if (localStorage.getItem('appNav')) {
                var appNav = JSON.parse(localStorage.getItem('appNav'))[3];
                if (appNav.params !== undefined && appNav.params.noUseCache !== undefined) {
                    _this.viewParams.params.noUseCache = appNav.params.noUseCache;
                }
                _this.viewParams.viewId = appNav.target; // p.viewId;
            }
            if (!_this.coms) {
                // 页面空白时 可以再次请求
            }
            else if (!localStorage.getItem('needRefreshTab4')) {
                // return; 暂时每次都请求
            }
            _this.netWork();
            localStorage.removeItem('needRefreshTab4');
        });
    };
    Tab4Page.prototype.netWork = function () {
        var _this = this;
        if (!this.canRequest) {
            return;
        }
        this.canRequest = false;
        // add by andrew.wen 此处需重新取一次postion 因为页面保存了上一次存的信息
        this.viewParams.sessionId = localStorage.getItem('sessionId');
        this.viewParams.params.code = JSON.parse(localStorage.getItem('position')).code;
        this.http.post('application/part/', this.viewParams, function (res) {
            _this.showRefresh = false;
            _this.canRequest = true;
            // 请求数据成功
            if (res) {
                var parseScript = JSON.parse(res.script);
                // 新增需求 后台如果返回501 则跳转到登录页面
                if (parseScript.code === 501) {
                    var params = {
                        pageId: parseScript.link.target,
                        params: {},
                        sessionId: localStorage.getItem('sessionId')
                    };
                    _this.appGlobalService.goToForward(params);
                }
                else if (parseScript.code === 502) {
                    _this.getViewData();
                }
                else {
                    _this.tabsService.getPageData(res, function (pageData) {
                        _this.coms = pageData.coms;
                        _this.footerComs = pageData.footerComs;
                        if (_this.coms[0].tagData.style === 'tag.AppTabTagLogic' && _this.coms[0].tagData.name === 'homeAppTabTag') {
                            _this.showTopTab = true;
                            _this.tagData = _this.coms[0].tagData;
                            _this.aWidth = 100 / _this.tagData.data.length + '%';
                        }
                        _this.titleBar = pageData.titleBar;
                        _this.isGrayBg = pageData.isGrayBg;
                        _this.showRefresher = pageData.showRefresher;
                        _this.showLoading = pageData.showLoading;
                        _this.backgroundImg = pageData.backgroundImg;
                        _this.showWaterImg = pageData.showWaterImg;
                        _this.getCurrentToggleData();
                    });
                }
            }
            else {
                // 请求数据失败
                _this.appGlobalService.showToast(res.message, 2000, 'middle');
            }
        }, function (err) {
            _this.canRequest = true;
            // 第一次请求失败
            if (!_this.coms && !_this.subComs) {
                if (localStorage.getItem('netState') === 'No network connection') {
                    _this.netState = localStorage.getItem('netState');
                }
                else {
                    _this.netState = '';
                }
                _this.showRefresh = true;
            }
        });
    };
    Tab4Page.prototype.buttonClick = function (obj) {
        if (obj.type === 'page') {
            var params = {
                pageId: obj.target,
                params: {},
                sessionId: localStorage.getItem('sessionId')
            };
            if (obj.param) {
                params.params = { code: this.positionInfo.code };
            }
            this.appGlobalService.goToForward(params);
        }
        else if (obj.type === 'modal') {
            this.showCityModel(obj.target);
        }
    };
    Tab4Page.prototype.showCityModel = function (target) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var that, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_6__["ChooseCityComponent"],
                                componentProps: { value: target, type: 1, modalTitle: '选择城市' } //    首页是1 默认不传或者0
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            that.positionInfo = JSON.parse(localStorage.getItem('position'));
                            that.sessionId = localStorage.getItem('sessionId');
                            that.viewParams.params.code = that.positionInfo.code;
                            that.viewParams.sessionId = that.sessionId;
                            // 切换完城市后需要刷新tab1-5
                            localStorage.setItem('needRefreshTab1', 'true');
                            localStorage.setItem('needRefreshTab2', 'true');
                            localStorage.setItem('needRefreshTab3', 'true');
                            localStorage.setItem('needRefreshTab4', 'true');
                            localStorage.setItem('needRefreshTab5', 'true');
                            that.netWork();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab4Page.prototype.searchButtonClick = function (obj) {
        console.log('to search history');
        localStorage.removeItem('searchParams');
        localStorage.removeItem('invitationArr');
        var searchPath = localStorage.getItem('tabPath') + '/navSearch';
        // tslint:disable-next-line:object-literal-key-quotes
        this.router.navigate([searchPath], { queryParams: { 'obj': JSON.stringify(obj) } });
    };
    /**
     * 返回方法
     */
    Tab4Page.prototype.back = function () {
        window.history.back();
    };
    Tab4Page.prototype.close = function () {
        window.history.back();
    };
    /** 收藏 */
    Tab4Page.prototype.favorite = function (submit) {
        var _this = this;
        // 判断是否登录 登录 返回 详情
        var params = {
            id: submit.id,
            content: submit.content,
            sessionId: localStorage.getItem('sessionId')
        };
        console.log('favorite --> submit', params);
        this.http.post('application/submit', params, function (res) {
            // 请求成功
            if (res.success) {
                // 更新收藏icon UI
                if (_this.titleBar.favorite.icon === "unfavorite") {
                    _this.titleBar.favorite.icon = "favorite";
                }
                else {
                    _this.titleBar.favorite.icon = "unfavorite";
                }
                console.log('favorite -->', res.message);
            }
            else {
                // 请求数据失败
                _this.appGlobalService.showToast(res.message, 2000, 'middle');
                if (res.type === 'page') {
                    var loginParams = {
                        pageId: res.target,
                        params: {},
                        sessionId: localStorage.getItem('sessionId')
                    };
                    // to login
                    _this.appGlobalService.goToForward(loginParams);
                }
            }
        });
    };
    // 分享弹框
    Tab4Page.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, modalData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            showBackdrop: true,
                            cssClass: 'sharePage',
                            backdropDismiss: true,
                            component: _coms_share_page_share_page_component__WEBPACK_IMPORTED_MODULE_8__["SharePageComponent"],
                            componentProps: { tagData: this.shareData }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        modalData = _a.sent();
                        console.log(modalData);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 分享 */
    Tab4Page.prototype.share = function (link) {
        var _this = this;
        console.log('share --> page', link);
        // 请求参数
        var params = {
            sessionId: localStorage.getItem("sessionId"),
            pageId: link.target,
            params: link.params
        };
        this.http.post('application/page', params, function (res) {
            console.log(JSON.parse(res.script));
            _this.shareData = JSON.parse(res.script).views[0].tags[0].data;
            console.log(_this.shareData);
            _this.presentModal();
        });
    };
    Tab4Page.prototype.subChange = function (obj, indexTab) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.subTagData.currentTab = indexTab;
            this.http.post('application/part', {
                viewId: obj.partLink.target,
                sessionId: localStorage.getItem("sessionId"),
                params: obj.partLink.params
            }, function (res) {
                if (res !== undefined && res != null) {
                    setTimeout(function () {
                        _this.subTagData.currentData = JSON.parse(res.script);
                        localStorage.setItem('refreshGrayBgTag', '' + _this.subTagData.currentData.isGrayBg);
                        _this.eventService.eventEmit.emit('refreshGrayBg', 'refreshGrayBg');
                        localStorage.setItem("dataMapFixedTabContainer", JSON.stringify(_this.subTagData));
                        _this.eventService.eventEmit.emit('refreshTab4FixedContainer', 'refreshTab4FixedContainer');
                    }, 50);
                }
            });
        }
    };
    // 聊天
    Tab4Page.prototype.chat = function (chat) {
        var _this = this;
        if (chat.link && chat.link.type === 'chat') {
            var cityId = JSON.parse(localStorage.getItem('position')) ? JSON.parse(localStorage.getItem('position')).code : 4403;
            var ifLogin = localStorage.getItem('userId') !== 'null';
            if (ifLogin) {
                this.http.getImId(chat.link.params.opportunity_id, chat.link.params.customer_id, cityId, function (item) {
                    _this.router.navigate(['home/tab4/chatOnline'], { queryParams: { item: JSON.stringify(item) } });
                });
            }
        }
    };
    // 更多
    Tab4Page.prototype.moreLine = function (more) {
        var that = this;
        var buttons = [];
        more.data.forEach(function (element, index) {
            buttons.push(element.label);
        });
        ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__["ActionSheetService"].showActionSheetWithOptions({
            options: buttons,
            maskClosable: true
        }, function (buttonIndex) {
            if (buttonIndex > -1) {
                console.log(more.data[buttonIndex]);
                that.selectItem(more.data[buttonIndex]);
            }
        });
    };
    Tab4Page.prototype.selectItem = function (item) {
        var _this = this;
        if (item.action === 'submit') {
            item.submit.sessionId = localStorage.getItem('sessionId');
            console.log('more --> submit', item.submit);
            this.http.post('application/submit', item.submit, function (res) {
                // 请求成功
                _this.appGlobalService.showToast(res.message, 2000, 'middle');
            });
        }
        else if (item.action === 'link') {
            var param = {
                pageId: item.link.target,
                params: item.link.params ? item.link.params : {},
                sessionId: localStorage.getItem('sessionId')
            };
            this.appGlobalService.goToForward(param);
        }
        else if (item.action === 'question') {
            // alert
            this.question(item);
        }
        else if (item.action === 'prompt') {
            // 弹出输入框 alert
            this.inputAlert(item);
        }
        else if (item.action === 'modal') {
            this.openRankingModal("ranking-modal", item);
        }
        else if (item.action === 'view') {
            var param = {
                viewId: item.link.target,
                params: item.link.params ? item.link.params : {},
                sessionId: localStorage.getItem('sessionId')
            };
            this.appGlobalService.goToForward(param);
        }
    };
    // ranking-modal
    Tab4Page.prototype.openRankingModal = function (className, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = {
                    sessionId: localStorage.getItem("sessionId"),
                    pageId: item.link.target,
                    params: item.link.params
                };
                this.http.post('application/page', params, function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var tagData, modal, modalData;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                tagData = JSON.parse(res.script).views[0].tags[0].data;
                                return [4 /*yield*/, this.modalController.create({
                                        showBackdrop: true,
                                        cssClass: className,
                                        component: _coms_ranking_modal_ranking_modal_component__WEBPACK_IMPORTED_MODULE_7__["RankingModalComponent"],
                                        componentProps: { tagData: tagData }
                                    })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, modal.onDidDismiss()];
                            case 3:
                                modalData = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    // alert
    Tab4Page.prototype.question = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            subHeader: '',
                            message: item.question,
                            buttons: [{
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('取消');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        item.submit.sessionId = localStorage.getItem('sessionId');
                                        console.log('more --> submit', item.submit);
                                        _this.http.post('application/submit', item.submit, function (res) {
                                            // 请求成功
                                            _this.appGlobalService.showToast(res.message, 2000, 'middle');
                                        });
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.inputAlert = function (item) {
        var _this = this;
        var that = this;
        ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__["Modal"].prompt(item.htmlObj.title, '', [
            {
                text: item.htmlObj.buttonLabel,
                onPress: function (value) {
                    return new Promise(function (resolve, reject) {
                        if (value.length === 0 || that.appGlobalService.isPhone(value)) {
                            resolve();
                            item.submit.content[item.htmlObj.input.formKey] = value;
                            item.submit.sessionId = localStorage.getItem('sessionId');
                            console.log('more --> submit', item.submit);
                            that.http.post('application/submit', item.submit, function (res) {
                                // 请求成功
                                if (res.message) {
                                    _this.appGlobalService.showToast(res.message, 2000, 'middle');
                                }
                            });
                        }
                        else {
                            that.appGlobalService.showToast('请输入正确的号码', 2000, 'top');
                        }
                    });
                }
            }
        ], 'default', null, [item.htmlObj.input.placeholder]);
    };
    //
    Tab4Page.prototype.filter = function (filter) {
        var param = {
            pageId: filter.link.target,
            params: filter.link.params ? filter.link.params : {},
            sessionId: localStorage.getItem('sessionId')
        };
        this.appGlobalService.goToForward(param);
    };
    // 确定提交表单用 暂时没用
    Tab4Page.prototype.textButton = function (textButton) {
        console.log(textButton);
    };
    // 数组btn
    Tab4Page.prototype.iconButtonClick = function (item) {
        this.selectItem(item);
    };
    Tab4Page.prototype.toggle = function (toggleButton, index) {
        if (toggleButton[index].checked) {
            return;
        }
        else if (index === 0) {
            toggleButton[0].checked = true;
            toggleButton[1].checked = false;
            this.toggleChange(toggleButton[0], '0');
        }
        else {
            toggleButton[0].checked = false;
            toggleButton[1].checked = true;
            this.toggleChange(toggleButton[1], '1');
        }
    };
    Tab4Page.prototype.getCurrentToggleData = function () {
        var _this = this;
        if (this.titleBar && this.titleBar.toggleButton) {
            this.titleBar.toggleButton.forEach(function (e, i) {
                if (e.checked) {
                    _this.toggleChange(e, i.toString());
                }
            });
        }
    };
    Tab4Page.prototype.toggleChange = function (obj, index) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.http.post('application/part', {
                viewId: obj.partLink.target,
                sessionId: localStorage.getItem("sessionId"),
                params: obj.partLink.params
            }, function (res) {
                if (res !== undefined && res != null) {
                    _this.tabsService.getPageData(res, function (pageData) {
                        _this.coms = pageData.coms;
                        _this.footerComs = pageData.footerComs;
                    });
                }
            });
        }
    };
    Tab4Page.prototype.onScroll = function (e) {
        e.preventDefault();
    };
    // 点击遮罩层关闭下拉面板
    Tab4Page.prototype.backdropclick = function () {
        this.openBackdrop = false;
    };
    // 刷新当前页
    Tab4Page.prototype.refreshPage = function () {
        this.netWork();
    };
    Tab4Page.prototype.segmentChanged = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Tab4Page.prototype.customSegmentChanged = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Tab4Page.prototype.refreshData = function (event) {
        event.target.complete();
    };
    Tab4Page.prototype.loadData = function (event) {
        setTimeout(function () { event.target.complete(); }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('superCotainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Tab4Page.prototype, "scrollContent", void 0);
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ../route/entry/entry.page.html */ "./src/app/route/entry/entry.page.html"),
            styles: [__webpack_require__(/*! ../route/entry/entry.page.scss */ "./src/app/route/entry/entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_9__["AppGlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_11__["MapBaiduService"],
            _shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_12__["TabsService"],
            src_app_shared_service_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__["ActionSheetService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map