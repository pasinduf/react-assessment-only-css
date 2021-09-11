import React from 'react'
import './pagination.css'

interface IProps {
    totalCount: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
    title: string;
    onPageChange: (page: number) => void
}

const Pagination = (props: IProps) => {

    return (
        <div>
            <div>
                {props.currentPage === props.totalPages ?
                    <>
                        <span>{(((props.currentPage - 1) * props.pageSize) + 1)}</span> -
                        <span> {props.totalCount}</span> of
                    </> :
                    <>
                        <label>{(((props.currentPage - 1) * props.pageSize) + 1)}</label> -
                        <label className="page-records"> {(props.currentPage * props.pageSize)}</label> of
                    </>
                }
                <label className="page-records">{` ${props.totalCount} ${props.title}`}</label>

                <div className="navigation">
                    <div>
                        <i className="navigation-prev fa fa-backward" onClick={() => { if (props.currentPage > 1) props.onPageChange(props.currentPage - 1) }} />
                        <label >{props.currentPage}</label> / <label>{props.totalPages}</label>
                        <i className="navigation-next fa fa-forward" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => { if (props.currentPage < props.totalPages) props.onPageChange(props.currentPage + 1) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pagination