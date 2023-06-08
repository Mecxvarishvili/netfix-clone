import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { IoIosSearch } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import page from '../../pages/page';

const SearchBar = () => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [windowWith, setWindowWidth ] = useState<number>(0)
    const inputRef = useRef<HTMLInputElement>(null!)
    const [ searchParams, setSearchParams ] = useSearchParams()
    const location  = useLocation()
    const navigate = useNavigate()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.value) {
            if(location.pathname === page.SEARCH) {
                e.preventDefault()
                searchParams.set("q", e.target.value)
                setSearchParams(searchParams)
            } else {
                    navigate({pathname:page.SEARCH, search: `?q=${e.target.value}`})
            }
        } else {
            navigate(page.BROWSE)
        }
    }


    useEffect(() => {
        if(location.pathname === page.SEARCH && !isOpen) {
            setIsOpen(true)
        }
        if(isOpen) {
            inputRef.current.focus()
        } 
    }, [isOpen])

    function clearInput () {
        navigate(page.BROWSE)
        inputRef.current.focus()
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        if(!e.target.value) {
            setIsOpen(false)
        }
    }


    useEffect(() => {
            window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    
            return () => {
              window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
            };

    });
    
    return (
        <div>
            { windowWith < 1200 ?
            <div className="input-cont d-flex align-items-center bg-black text-white border border-1  border-white fs-xs-2 container gx-1">
                <Form.Control placeholder="Search" className="border-0 rounded-0 bg-black text-white py-0 px-2 fs-xs-s9"  ref={inputRef} /* onBlur={handleBlur} */ onChange={handleChange} defaultValue={searchParams.get("q") as string} />
            </div>  :
            isOpen ?
            <div className="input-cont d-flex align-items-center bg-black text-white border border-1  border-white fs-xs-2 container gx-1">
                <IoIosSearch/>
                <Form.Control placeholder="Title, People, Genres" className="border-0 rounded-0 bg-black text-white py-0 px-2 fs-xs-s9"  ref={inputRef} onBlur={handleBlur} onChange={handleChange} defaultValue={searchParams.get("q") as string} />
                <RxCross2 onClick={clearInput} />
            </div> 
            :<IoIosSearch className="text-white fs-3" onClick={() => setIsOpen(true)} />
            }
            
        </div>
    );
};

export default SearchBar;