/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useLayoutEffect, useEffect } from "react";
import objectPath from "object-path";
import { useLocation } from "react-router-dom";
import { QuickActions } from "./components/QuickActions";
import { BreadCrumbs } from "./components/BreadCrumbs";
import {
  getBreadcrumbsAndTitle,
  useSubheader,
} from "../../_core/MetronicSubheader";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import date from "date-and-time";
import pl from "date-and-time/locale/pl";
import { useState } from "react";

export function SubHeader() {
  const uiService = useHtmlClassService();
  const location = useLocation();
  const subheader = useSubheader();
  const [now, setNow] = useState("");
  const layoutProps = useMemo(() => {
    return {
      config: uiService.config,
      subheaderMobileToggle: objectPath.get(
        uiService.config,
        "subheader.mobile-toggle"
      ),
      subheaderCssClasses: uiService.getClasses("subheader", true),
      subheaderContainerCssClasses: uiService.getClasses(
        "subheader_container",
        true
      ),
    };
  }, [uiService]);

  useLayoutEffect(() => {
    const aside = getBreadcrumbsAndTitle("kt_aside_menu", location.pathname);
    const header = getBreadcrumbsAndTitle("kt_header_menu", location.pathname);
    const breadcrumbs =
      aside && aside.breadcrumbs.length > 0
        ? aside.breadcrumbs
        : header.breadcrumbs;
    subheader.setBreadcrumbs(breadcrumbs);
    subheader.setTitle(
      aside && aside.title && aside.title.length > 0
        ? aside.title
        : header.title
    );
    date.locale(pl);
    setNow(date.format(new Date(), "ddd DD"));
    // eslint-disable-next-line
  }, [location.pathname]);

  // Do not remove this useEffect, need from update title/breadcrumbs outside (from the page)
  useEffect(() => {}, [subheader]);

  return (
    <div
      id="kt_subheader"
      className={`subheader py-2 py-lg-4   ${layoutProps.subheaderCssClasses}`}
    >
      <div
        className={`${layoutProps.subheaderContainerCssClasses} d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap`}
      >
        {/* Info */}
        <div className="d-flex align-items-center">
          <div
            className="btn btn-light btn-sm font-weight-bold disabled-link"
            id="kt_dashboard_daterangepicker"
            data-toggle="tooltip"
            title="Select dashboard daterange"
            data-placement="left"
          >
            <span
              className="text-muted font-weight-bold mr-2"
              id="kt_dashboard_daterangepicker_title"
            >
              Panel administratora
            </span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="d-flex align-items-center">
          <div
            className="btn btn-light btn-sm font-weight-bold disabled-link"
            id="kt_dashboard_daterangepicker"
            data-toggle="tooltip"
            title="Select dashboard daterange"
            data-placement="left"
          >
            <span
              className="text-muted font-weight-bold mr-2"
              id="kt_dashboard_daterangepicker_title"
            >
              Dzisiaj
            </span>
            <span
              className="text-primary font-weight-bold"
              id="kt_dashboard_daterangepicker_date"
            >
              {now}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
