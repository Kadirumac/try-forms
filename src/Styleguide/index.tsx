import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'

import { ReactComponent as IconArrowRight } from '../assets/icons/icon-arrow-right.svg'
import { ReactComponent as IconChevron } from '../assets/icons/down-arrow.svg'

const StyleGuide = () => {
    return (
        <>
            <div className={'wrapper pl-5'}>
                <div className={'container'}>
                    <div className="row pt-5 m-0">
                        <h1>TRY Style guide</h1>
                    </div>
                    <div className={'row justify-content-center'}>
                
                        <div className={'col-5'}>
                            <div className={'styleguide'}>                             

                                <hr />                              

                                <h2>Forms: Text Inputs</h2>

                                <div className={'input--wrapper'}>
                                    <input
                                        type={'text'}
                                        id={'input--text'}
                                        placeholder={'Label for Input Text'}
                                        aria-placeholder={'Label for Input Text'} />
                                    <label htmlFor={'input--text'}>Label for Input Text</label>
                                    <span className={'input--border'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper has--icon'}>
                                    <input
                                        type={'text'}
                                        id={'input--text'}
                                        placeholder={'Label for Input Text with Icon'}
                                        aria-placeholder={'Label for Input Text with Icon'} />
                                    <label htmlFor={'input--text'}>Label for Input Text with Icon</label>
                                    <span className={'input--border'} />
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper is--valid'}>
                                    <input
                                        type={'text'}
                                        id={'input--text-valid'}
                                        placeholder={'Label for Valid Input Text'}
                                        aria-placeholder={'Label for Valid Input Text'} />
                                    <label htmlFor={'input--text-valid'}>Label for Valid Input Text</label>
                                    <span className={'input--border'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper has--icon is--valid'}>
                                    <input
                                        type={'text'}
                                        id={'input--text-valid-icon'}
                                        placeholder={'Label for Valid Input Text with Icon'}
                                        aria-placeholder={'Label for Valid Input Text with Icon'} />
                                    <label htmlFor={'input--text-valid-icon'}>Label for Valid Input Text with Icon</label>
                                    <span className={'input--border'} />
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper is--invalid'}>
                                    <input
                                        type={'text'}
                                        id={'input--text-invalid'}
                                        placeholder={'Label for Invalid Input Text'}
                                        aria-placeholder={'Label for Invalid Input Text'} />
                                    <label htmlFor={'input--text-invalid'}>Label for Invalid Input Text</label>
                                    <span className={'input--border'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper has--icon is--invalid'}>
                                    <input
                                        type={'text'}
                                        id={'input--text-invalid-icon'}
                                        placeholder={'Label for Invalid Input Text with Icon'}
                                        aria-placeholder={'Label for Invalid Input Text with Icon'} />
                                    <label htmlFor={'input--text-invalid-icon'}>Label for Invalid Input Text with Icon</label>
                                    <span className={'input--border'} />
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper'}>
                                    <input
                                        type={'text'}
                                        id={'input--text-disabled'}
                                        placeholder={'Label for Disabled Input Text'}
                                        aria-placeholder={'Label for Disabled Input Text'}
                                        disabled />
                                    <label htmlFor={'input--text-disabled'}>Label for Disabled Input Text</label>
                                    <span className={'input--border'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper has--icon'}>
                                    <input
                                        type={'text'}
                                        id={'input--text-disabled-icon'}
                                        placeholder={'Label for Disabled Input Text with Icon'}
                                        aria-placeholder={'Label for Disabled Input Text with Icon'}
                                        disabled />
                                    <label htmlFor={'input--text-disabled-icon'}>Label for Disabled Input Text with Icon</label>
                                    <span className={'input--border'} />
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <hr />

                                <h2>Forms: Textareas</h2>

                                <div className={'input--wrapper'}>
                                    <textarea
                                        id={'textarea'}
                                        placeholder={'Label for Textarea'}
                                        aria-placeholder={'Label for Textarea'} />
                                    <label htmlFor={'textarea'}>Label for Textarea</label>
                                    <span className={'input--border'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper is--valid'}>
                                    <textarea
                                        id={'textarea-valid'}
                                        placeholder={'Label for Valid Textarea'}
                                        aria-placeholder={'Label for Valid Textarea'} />
                                    <label htmlFor={'textarea-valid'}>Label for Valid Textarea</label>
                                    <span className={'input--border'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper is--invalid'}>
                                    <textarea
                                        id={'textarea-invalid'}
                                        placeholder={'Label for Invalid Textarea'}
                                        aria-placeholder={'Label for Invalid Textarea'} />
                                    <label htmlFor={'textarea-invalid'}>Label for Invalid Textarea</label>
                                    <span className={'input--border'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <div className={'input--wrapper'}>
                                    <textarea
                                        id={'textarea-disabled'}
                                        placeholder={'Label for Disabled Textarea'}
                                        aria-placeholder={'Label for Disabled Textarea'}
                                        disabled />
                                    <label htmlFor={'textarea-disabled'}>Label for Disabled Textarea</label>
                                    <span className={'input--border'} />
                                    <span className={'input--hint'}>Helper or Hint Text</span>
                                </div>

                                <hr />

                                <h2>Forms: Checkbox Inputs</h2>

                                <div className={'checkbox-radio--wrapper'}>
                                    <input
                                        type={'checkbox'}
                                        id={'input--checkbox'} />
                                    <label htmlFor={'input--checkbox'}>Label for Input Checkbox</label>
                                </div>

                                <div className={'checkbox-radio--wrapper is--valid'}>
                                    <input
                                        type={'checkbox'}
                                        id={'input--checkbox-valid'}
                                        checked />
                                    <label htmlFor={'input--checkbox-valid'}>Label for Valid Input Checkbox</label>
                                </div>

                                <div className={'checkbox-radio--wrapper is--invalid'}>
                                    <input
                                        type={'checkbox'}
                                        id={'input--checkbox-invalid'} />
                                    <label htmlFor={'input--checkbox-invalid'}>Label for Invalid Input Checkbox (can never be Checked AND Invalid)</label>
                                </div>

                                <div className={'checkbox-radio--wrapper'}>
                                    <input
                                        type={'checkbox'}
                                        id={'input--checkbox-checked'}
                                        checked />
                                    <label htmlFor={'input--checkbox-checked'}>Label for Checked Input Checkbox</label>
                                </div>

                                <div className={'checkbox-radio--wrapper'}>
                                    <input
                                        type={'checkbox'}
                                        id={'input--checkbox-disabled'}
                                        disabled />
                                    <label htmlFor={'input--checkbox-disabled'}>Label for Disabled Input Checkbox</label>
                                </div>

                                <div className={'checkbox-radio--wrapper'}>
                                    <input
                                        type={'checkbox'}
                                        id={'input--checkbox-checked-disabled'}
                                        checked
                                        disabled />
                                    <label htmlFor={'input--checkbox-checked-disabled'}>Label for Checked Disabled Input Checkbox</label>
                                </div>                            

                               
                            </div>
                        </div>
                        <div className={'col-5'}>
                            <div className={'styleguide'}>

                                <hr />

                                <h2>Buttons</h2>

                                <Button className={'btn btn--cta'}>
                                    CTA Button
                                </Button>

                                <Button className={'btn btn--cta has--icon'}>
                                    CTA Button with Icon
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                </Button>

                                <Button
                                    className={'btn btn--cta'}
                                    disabled>
                                    Disabled CTA Button
                                </Button>

                                <Button
                                    className={'btn btn--cta has--icon'}
                                    disabled>
                                    Disabled CTA Button with Icon
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                </Button>

                                <Button className={'btn btn--default'}>
                                    Default Button
                                </Button>

                                <Button className={'btn btn--default has--icon'}>
                                    Default Button with Icon
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                </Button>

                                <Button
                                    className={'btn btn--default'}
                                    disabled>
                                    Disabled Default Button
                                </Button>

                                <Button
                                    className={'btn btn--default has--icon'}
                                    disabled>
                                    Disabled Default Button with Icon
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                </Button>

                                <Button className={'btn btn--secondary'}>
                                    Secondary Button
                                </Button>

                                <Button className={'btn btn--secondary has--icon'}>
                                    Secondary Button with Icon
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                </Button>

                                <Button
                                    className={'btn btn--secondary'}
                                    disabled>
                                    Disabled Secondary Button
                                </Button>

                                <Button
                                    className={'btn btn--secondary has--icon'}
                                    disabled>
                                    Disabled Secondary Button with Icon
                                    <IconArrowRight
                                        className={'icon icon--22'}
                                        width={'22'}
                                        height={'22'} />
                                </Button>
                              
                                <hr />

                                <h2>Form: Selects</h2>

                                <div className={'select--wrapper'}>
                                    <select
                                        className={'select'}
                                        id={'select'}>
                                        <option
                                            selected
                                            disabled>
                                            Select an Option
                                        </option>
                                        <option>First Select Option</option>
                                        <option>Second Select Option</option>
                                        <option>Third Select Option</option>
                                        <option>Fourth Select Option</option>
                                        <option>Fifth Select Option</option>
                                    </select>
                                    <label htmlFor={'select'}>Label for Select</label>
                                    <IconChevron
                                        className={'icon icon--16'}
                                        width={'16'}
                                        height={'16'} />
                                </div>

                                <div className={'select--wrapper'}>
                                    <select
                                        className={'select'}
                                        id={'select--disabled'}
                                        disabled>
                                        <option
                                            selected
                                            disabled>
                                            Select an Option
                                        </option>
                                        <option>First Select Option</option>
                                        <option>Second Select Option</option>
                                        <option>Third Select Option</option>
                                        <option>Fourth Select Option</option>
                                        <option>Fifth Select Option</option>
                                    </select>
                                    <label htmlFor={'select--disabled'}>Label for Disabled Select</label>
                                    <IconChevron
                                        className={'icon icon--16'}
                                        width={'16'}
                                        height={'16'} />
                                </div>

                                <hr />

                                <h2>Dropdowns</h2>

                                <div className={'dropdown--wrapper'}>
                                    <DropdownButton
                                        id={'dropdown'}
                                        title={'Dropdown'}>
                                        <Dropdown.Item>Some Dropdown Item</Dropdown.Item>
                                        <Dropdown.Item>Another Dropdown Item</Dropdown.Item>
                                        <Dropdown.Item>Third Dropdown Item</Dropdown.Item>
                                        <Dropdown.Item>Lorem ipsum dolor</Dropdown.Item>
                                        <Dropdown.Item>Yet another Item</Dropdown.Item>
                                        <Dropdown.Item>And one more Item</Dropdown.Item>
                                    </DropdownButton>
                                    <IconChevron
                                        className={'icon icon--16'}
                                        width={'16'}
                                        height={'16'} />
                                </div>

                                <hr />

                                <h2>Headlines</h2>

                                <h1>The quick brown fox jumps over the lazy dog</h1>
                                <h2>The quick brown fox jumps over the lazy dog</h2>
                                <h3>The quick brown fox jumps over the lazy dog</h3>
                                <h4>The quick brown fox jumps over the lazy dog</h4>
                                <h5>The quick brown fox jumps over the lazy dog</h5>
                                <h6>The quick brown fox jumps over the lazy dog</h6>

                                <hr />

                                <h2>Text Styles</h2>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus, diam nec porta viverra, augue enim finibus ligula, id fermentum turpis mi ac urna. Fusce ac porttitor ex. Aenean ut suscipit lacus, et blandit mauris. Aliquam nec sollicitudin sapien. In rhoncus ornare urna, at tempus urna porta ac. Nulla nibh tortor, pulvinar vel dolor vel, auctor scelerisque odio. Donec congue neque vel ligula congue euismod. Nulla sapien risus, vestibulum nec sem eu, gravida tempus turpis. Donec id vestibulum nisi, at feugiat mi.
                                </p>

                                <p>
                                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus, diam nec porta viverra, augue enim finibus ligula, id fermentum turpis mi ac urna. Fusce ac porttitor ex. Aenean ut suscipit lacus, et blandit mauris. Aliquam nec sollicitudin sapien. In rhoncus ornare urna, at tempus urna porta ac. Nulla nibh tortor, pulvinar vel dolor vel, auctor scelerisque odio. Donec congue neque vel ligula congue euismod. Nulla sapien risus, vestibulum nec sem eu, gravida tempus turpis. Donec id vestibulum nisi, at feugiat mi.</i>
                                </p>

                                <p>
                                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus, diam nec porta viverra, augue enim finibus ligula, id fermentum turpis mi ac urna. Fusce ac porttitor ex. Aenean ut suscipit lacus, et blandit mauris. Aliquam nec sollicitudin sapien. In rhoncus ornare urna, at tempus urna porta ac. Nulla nibh tortor, pulvinar vel dolor vel, auctor scelerisque odio. Donec congue neque vel ligula congue euismod. Nulla sapien risus, vestibulum nec sem eu, gravida tempus turpis. Donec id vestibulum nisi, at feugiat mi.</b>
                                </p>

                                <p>
                                    <u>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus, diam nec porta viverra, augue enim finibus ligula, id fermentum turpis mi ac urna. Fusce ac porttitor ex. Aenean ut suscipit lacus, et blandit mauris. Aliquam nec sollicitudin sapien. In rhoncus ornare urna, at tempus urna porta ac. Nulla nibh tortor, pulvinar vel dolor vel, auctor scelerisque odio. Donec congue neque vel ligula congue euismod. Nulla sapien risus, vestibulum nec sem eu, gravida tempus turpis. Donec id vestibulum nisi, at feugiat mi.</u>
                                </p>

                                <hr />

                                <h2>Links</h2>

                                <p>
                                    <a
                                        href={'#'}
                                        className={'link'}>
                                        Yet another fancy link
                                    </a>
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus, diam nec porta viverra, augue enim finibus ligula, id fermentum turpis mi ac urna.
                                    <a
                                        href={'#'}
                                        className={'link'}>
                                        Fusce ac porttitor ex.
                                    </a>
                                    Aenean ut suscipit lacus, et blandit mauris. Aliquam nec sollicitudin sapien. In rhoncus ornare urna, at tempus urna porta ac. Nulla nibh tortor, pulvinar vel dolor vel, auctor scelerisque odio. Donec congue neque vel ligula congue euismod. Nulla sapien risus, vestibulum nec sem eu, gravida tempus turpis. Donec id vestibulum nisi, at feugiat mi.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StyleGuide
